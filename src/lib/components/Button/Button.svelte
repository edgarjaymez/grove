<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import Icon from '../Icon/Icon.svelte';

	type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';
	type ButtonColor = 'accent' | 'gray';
	type ButtonSize = 'lg' | 'md' | 'sm';

	interface IButton {
		class?: ClassValue;
		text: string;
		variant?: ButtonVariant;
		color?: ButtonColor;
		size?: ButtonSize;
		icon?: string;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
	}

	let {
		class: className,
		text,
		variant = 'filled',
		color = 'accent',
		size = 'md',
		icon,
		disabled = false,
		onclick,
		...rest
	}: IButton = $props();
</script>

<button
	class={[
		'btn',
		`btn--${variant}`,
		`btn--${color}`,
		`btn--${size}`,
		icon && 'btn--has-icon',
		className
	]}
	{disabled}
	{onclick}
	{...rest}
>
	{#if icon}
		<Icon unicode={icon} />
	{/if}
	{text}
</button>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: var(--border-radius-8xl);
		border: var(--border-width-base) solid transparent;
		cursor: pointer;
		white-space: nowrap;
		letter-spacing: var(--letter-spacing-base);
		text-decoration: none;
		transition:
			background-color 300ms,
			color 300ms,
			border-color 300ms,
			box-shadow 300ms;
	}

	/* Sizes */
	.btn--lg {
		gap: var(--soft-grid-8);
		padding: var(--soft-grid-12) var(--soft-grid-20);
		font: var(--typography-single-line-base-base);
	}
	.btn--lg.btn--has-icon {
		padding-left: var(--soft-grid-16);
	}

	.btn--md {
		gap: var(--soft-grid-6);
		padding: var(--soft-grid-8) var(--soft-grid-16);
		font: var(--typography-single-line-subtle-emphasis);
	}
	.btn--md.btn--has-icon {
		padding-left: var(--soft-grid-12);
	}

	.btn--sm {
		gap: var(--soft-grid-4);
		padding: var(--soft-grid-4) var(--soft-grid-12);
		font: var(--typography-single-line-label-base);
	}
	.btn--sm.btn--has-icon {
		padding-left: var(--soft-grid-8);
	}

	/* Outlined: compensate vertical padding for border to preserve height */
	.btn--outlined.btn--lg {
		padding-block: calc(var(--soft-grid-12) - var(--border-width-base));
	}
	.btn--outlined.btn--md {
		padding-block: calc(var(--soft-grid-8) - var(--border-width-base));
	}
	.btn--outlined.btn--sm {
		padding-block: calc(var(--soft-grid-4) - var(--border-width-base));
	}

	/* ---- Filled ---- */
	.btn--filled.btn--accent {
		background: var(--semantic-color-surface-accent-summit);
		color: var(--semantic-color-text-on-accent-summit-base);
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.btn--filled.btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
	}
	.btn--filled.btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: none;
	}

	.btn--filled.btn--gray {
		background: var(--semantic-color-surface-gray-summit);
		color: var(--semantic-color-text-on-gray-summit-base);
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.btn--filled.btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
	}
	.btn--filled.btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: none;
	}

	/* ---- Tonal ---- */
	.btn--tonal.btn--accent {
		background: var(--semantic-color-surface-accent-terrace);
		color: var(--semantic-color-text-on-accent-terrace-base);
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.btn--tonal.btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
	}
	.btn--tonal.btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: none;
	}

	.btn--tonal.btn--gray {
		background: var(--semantic-color-surface-gray-terrace);
		color: var(--semantic-color-text-on-gray-terrace-base);
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.btn--tonal.btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
	}
	.btn--tonal.btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: none;
	}

	/* ---- Outlined ---- */
	.btn--outlined.btn--accent {
		border-color: var(--semantic-color-border-around-accent-aurora);
		color: var(--semantic-color-text-on-accent-terrace-base);
	}
	.btn--outlined.btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		border-color: transparent;
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.btn--outlined.btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		border-color: transparent;
		box-shadow: none;
	}

	.btn--outlined.btn--gray {
		border-color: var(--semantic-color-border-around-gray-aurora);
		color: var(--semantic-color-text-on-gray-terrace-base);
	}
	.btn--outlined.btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		border-color: transparent;
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.btn--outlined.btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		border-color: transparent;
		box-shadow: none;
	}

	/* ---- Ghost ---- */
	.btn--ghost.btn--accent {
		color: var(--semantic-color-text-on-accent-terrace-base);
	}
	.btn--ghost.btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.btn--ghost.btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: none;
	}

	.btn--ghost.btn--gray {
		color: var(--semantic-color-text-on-gray-terrace-base);
	}
	.btn--ghost.btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.btn--ghost.btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: none;
	}

	/* ---- Disabled ---- */
	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>

<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import Icon from '../Icon/Icon.svelte';

	type IconButtonVariant = 'filled' | 'tonal' | 'outlined' | 'ghost';
	type IconButtonColor = 'accent' | 'gray';
	type IconButtonSize = 'lg' | 'md' | 'sm';

	interface IIconButton {
		class?: ClassValue;
		icon: string;
		variant?: IconButtonVariant;
		color?: IconButtonColor;
		size?: IconButtonSize;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
	}

	let {
		class: className,
		icon,
		variant = 'filled',
		color = 'accent',
		size = 'md',
		disabled = false,
		onclick,
		...rest
	}: IIconButton = $props();
</script>

<button
	class={['icon-btn', `icon-btn--${variant}`, `icon-btn--${color}`, `icon-btn--${size}`, className]}
	{disabled}
	{onclick}
	{...rest}
>
	<Icon unicode={icon} />
</button>

<style>
	.icon-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: var(--border-radius-8xl);
		border: var(--border-width-base) solid transparent;
		cursor: pointer;
		transition:
			background-color 300ms,
			color 300ms,
			border-color 300ms,
			box-shadow 300ms;
	}

	/* Sizes — font shorthand sets line-height context for Icon's 1lh sizing */
	.icon-btn--lg {
		padding: var(--soft-grid-12);
		font: var(--typography-single-line-base-base);
	}

	.icon-btn--md {
		padding: var(--soft-grid-8);
		font: var(--typography-single-line-subtle-emphasis);
	}

	.icon-btn--sm {
		padding: var(--soft-grid-4);
		font: var(--typography-single-line-label-base);
	}

	/* Outlined: compensate all-side padding for border to preserve dimensions */
	.icon-btn--outlined.icon-btn--lg {
		padding: calc(var(--soft-grid-12) - var(--border-width-base));
	}
	.icon-btn--outlined.icon-btn--md {
		padding: calc(var(--soft-grid-8) - var(--border-width-base));
	}
	.icon-btn--outlined.icon-btn--sm {
		padding: calc(var(--soft-grid-4) - var(--border-width-base));
	}

	/* ---- Filled ---- */
	.icon-btn--filled.icon-btn--accent {
		background: var(--semantic-color-surface-accent-summit);
		color: var(--semantic-color-text-on-accent-summit-base);
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.icon-btn--filled.icon-btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
	}
	.icon-btn--filled.icon-btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: none;
	}

	.icon-btn--filled.icon-btn--gray {
		background: var(--semantic-color-surface-gray-summit);
		color: var(--semantic-color-text-on-gray-summit-base);
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.icon-btn--filled.icon-btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
	}
	.icon-btn--filled.icon-btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: none;
	}

	/* ---- Tonal ---- */
	.icon-btn--tonal.icon-btn--accent {
		background: var(--semantic-color-surface-accent-terrace);
		color: var(--semantic-color-text-on-accent-terrace-base);
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.icon-btn--tonal.icon-btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
	}
	.icon-btn--tonal.icon-btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: none;
	}

	.icon-btn--tonal.icon-btn--gray {
		background: var(--semantic-color-surface-gray-terrace);
		color: var(--semantic-color-text-on-gray-terrace-base);
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.icon-btn--tonal.icon-btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
	}
	.icon-btn--tonal.icon-btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: none;
	}

	/* ---- Outlined ---- */
	.icon-btn--outlined.icon-btn--accent {
		border-color: var(--semantic-color-border-around-accent-aurora);
		color: var(--semantic-color-text-on-accent-terrace-base);
	}
	.icon-btn--outlined.icon-btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		border-color: transparent;
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.icon-btn--outlined.icon-btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		border-color: transparent;
		box-shadow: none;
	}

	.icon-btn--outlined.icon-btn--gray {
		border-color: var(--semantic-color-border-around-gray-aurora);
		color: var(--semantic-color-text-on-gray-terrace-base);
	}
	.icon-btn--outlined.icon-btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		border-color: transparent;
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.icon-btn--outlined.icon-btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		border-color: transparent;
		box-shadow: none;
	}

	/* ---- Ghost ---- */
	.icon-btn--ghost.icon-btn--accent {
		color: var(--semantic-color-text-on-accent-terrace-base);
	}
	.icon-btn--ghost.icon-btn--accent:hover {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: var(--drop-shadow-under-accent-summit);
	}
	.icon-btn--ghost.icon-btn--accent:active {
		background: var(--semantic-color-surface-accent-aurora);
		color: var(--semantic-color-text-on-accent-aurora-base);
		box-shadow: none;
	}

	.icon-btn--ghost.icon-btn--gray {
		color: var(--semantic-color-text-on-gray-terrace-base);
	}
	.icon-btn--ghost.icon-btn--gray:hover {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: var(--drop-shadow-under-gray-summit);
	}
	.icon-btn--ghost.icon-btn--gray:active {
		background: var(--semantic-color-surface-gray-aurora);
		color: var(--semantic-color-text-on-gray-aurora-base);
		box-shadow: none;
	}

	/* ---- Disabled ---- */
	.icon-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>

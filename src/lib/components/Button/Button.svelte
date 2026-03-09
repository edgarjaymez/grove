<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import Icon from '../Icon/Icon.svelte';

	interface IButton {
		class?: ClassValue;
		text: string;
		variant?: 'filled' | 'tonal' | 'outlined' | 'ghost';
		color?: 'accent' | 'gray';
		size?: 'lg' | 'md' | 'sm';
		icon?: string;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
	}

	let {
		class: className,
		text,
		variant = 'filled',
		color = 'accent',
		size = 'lg',
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
		border: none;
		cursor: pointer;
		white-space: nowrap;
		letter-spacing: var(--letter-spacing-base);
		text-decoration: none;
		transition:
			background 300ms ease-in-out,
			color 300ms ease-in-out,
			box-shadow 300ms ease-in-out,
			border-color 300ms ease-in-out;
	}

	.btn--outlined {
		border: var(--border-width-base) solid transparent;
	}

	/* Sizes */
	.btn--lg {
		gap: var(--soft-grid-8);
		padding: var(--soft-grid-12) var(--soft-grid-20);
		font: var(--typography-single-line-base-base);
	}
	.btn--lg.btn--has-icon {
		padding-inline-start: var(--soft-grid-16);
	}

	.btn--md {
		gap: var(--soft-grid-6);
		padding: var(--soft-grid-8) var(--soft-grid-16);
		font: var(--typography-single-line-subtle-emphasis);
	}
	.btn--md.btn--has-icon {
		padding-inline-start: var(--soft-grid-12);
	}

	.btn--sm {
		gap: var(--soft-grid-4);
		padding: var(--soft-grid-4) var(--soft-grid-12);
		font: var(--typography-single-line-label-base);
	}
	.btn--sm.btn--has-icon {
		padding-inline-start: var(--soft-grid-8);
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

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
		}

		&:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}
	}

	.btn--filled.btn--gray {
		background: var(--semantic-color-surface-gray-summit);
		color: var(--semantic-color-text-on-gray-summit-base);
		box-shadow: var(--drop-shadow-under-gray-summit);

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
		}

		&:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}
	}

	/* ---- Tonal ---- */
	.btn--tonal.btn--accent {
		background: var(--semantic-color-surface-accent-terrace);
		color: var(--semantic-color-text-on-accent-terrace-base);
		box-shadow: var(--drop-shadow-under-accent-summit);

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
		}

		&:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}
	}

	.btn--tonal.btn--gray {
		background: var(--semantic-color-surface-gray-terrace);
		color: var(--semantic-color-text-on-gray-terrace-base);
		box-shadow: var(--drop-shadow-under-gray-summit);

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
		}

		&:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}
	}

	/* ---- Outlined ---- */
	.btn--outlined.btn--accent {
		background: transparent;
		border-color: var(--semantic-color-border-around-accent-aurora);
		color: var(--semantic-color-text-on-accent-terrace-base);

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			border-color: transparent;
			box-shadow: var(--drop-shadow-under-accent-summit);
		}

		&:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			border-color: transparent;
			box-shadow: none;
		}
	}

	.btn--outlined.btn--gray {
		background: transparent;
		border-color: var(--semantic-color-border-around-gray-aurora);
		color: var(--semantic-color-text-on-gray-terrace-base);

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			border-color: transparent;
			box-shadow: var(--drop-shadow-under-gray-summit);
		}

		&:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			border-color: transparent;
			box-shadow: none;
		}
	}

	/* ---- Ghost ---- */
	.btn--ghost.btn--accent {
		background: transparent;
		color: var(--semantic-color-text-on-accent-terrace-base);

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: var(--drop-shadow-under-accent-summit);
		}

		&:not(:disabled):active {
			background: var(--semantic-color-surface-accent-aurora);
			color: var(--semantic-color-text-on-accent-aurora-base);
			box-shadow: none;
		}
	}

	.btn--ghost.btn--gray {
		background: transparent;
		color: var(--semantic-color-text-on-gray-terrace-base);

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: var(--drop-shadow-under-gray-summit);
		}
		&:not(:disabled):active {
			background: var(--semantic-color-surface-gray-aurora);
			color: var(--semantic-color-text-on-gray-aurora-base);
			box-shadow: none;
		}
	}

	/* ---- Icon fill on hover ---- */
	.btn:not(:disabled):hover :global(i) {
		font-family: var(--font-family-icons-fill) !important;
	}

	/* ---- Disabled ---- */
	.btn:disabled {
		opacity: 0.5;

		&:hover {
			cursor: not-allowed;
		}
	}
</style>

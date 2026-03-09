<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import Icon from '../Icon/Icon.svelte';

	interface IIconButton {
		class?: ClassValue;
		icon: string;
		variant?: 'filled' | 'tonal' | 'outlined' | 'ghost';
		color?: 'accent' | 'gray';
		size?: 'lg' | 'md' | 'sm';
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
	}

	let {
		class: className,
		icon,
		variant = 'filled',
		color = 'accent',
		size = 'lg',
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
		border: none;
		cursor: pointer;
		transition:
			background 300ms ease-in-out,
			color 300ms ease-in-out,
			box-shadow 300ms ease-in-out,
			border-color 300ms ease-in-out;
	}

	.icon-btn--outlined {
		border: var(--border-width-base) solid transparent;
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

	.icon-btn--filled.icon-btn--gray {
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
	.icon-btn--tonal.icon-btn--accent {
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

	.icon-btn--tonal.icon-btn--gray {
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
	.icon-btn--outlined.icon-btn--accent {
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

	.icon-btn--outlined.icon-btn--gray {
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
	.icon-btn--ghost.icon-btn--accent {
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

	.icon-btn--ghost.icon-btn--gray {
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
	.icon-btn:not(:disabled):hover :global(i) {
		font-family: var(--font-family-icons-fill) !important;
	}

	/* ---- Disabled ---- */
	.icon-btn:disabled {
		opacity: 0.5;

		&:hover {
			cursor: not-allowed;
		}
	}
</style>

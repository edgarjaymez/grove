<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import Icon from '$lib/components/Icon/Icon.svelte';

	type Color = 'brand' | 'accent' | 'information' | 'gray';

	interface IToDoCard {
		class?: ClassValue;
		category?: string;
		color?: Color;
		count?: string;
	}

	let {
		class: className,
		category = 'Category',
		color = 'brand',
		count = '3'
	}: IToDoCard = $props();
</script>

<div class={['todo-card', `todo-card--${color}`, `drop-shadow-under-${color}-terrace`, className]}>
	<div class="todo-card__header">
		<span class="todo-card__count">{count}</span>
		<div class="todo-card__icon-wrap">
			<Icon isFilled unicode="&#xE416;" />
		</div>
	</div>
	<span class="todo-card__category">{category}</span>
</div>

<style>
	.todo-card {
		display: flex;
		flex-direction: column;
		gap: var(--soft-grid-8);
		padding: var(--soft-grid-16);
		border-radius: var(--border-radius-lg);
		overflow: clip;
	}

	.todo-card__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		flex-shrink: 0;
	}

	.todo-card__count {
		font: var(--typography-single-line-title-emphasis);
		letter-spacing: var(--letter-spacing-base);
		white-space: nowrap;
		flex-shrink: 0;
	}

	.todo-card__icon-wrap {
		font-size: var(--font-size-lg);
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.todo-card__category {
		font: var(--typography-single-line-subheading-base);
		letter-spacing: var(--letter-spacing-base);
		width: 100%;
		flex-shrink: 0;
	}

	/* Brand */
	.todo-card--brand {
		background: var(--semantic-color-surface-brand-terrace);
		color: var(--semantic-color-text-on-brand-terrace-subtle);
	}
	.todo-card--brand .todo-card__count {
		color: var(--semantic-color-text-on-brand-terrace-base);
	}

	/* Accent */
	.todo-card--accent {
		background: var(--semantic-color-surface-accent-terrace);
		color: var(--semantic-color-text-on-accent-terrace-subtle);
	}
	.todo-card--accent .todo-card__count {
		color: var(--semantic-color-text-on-accent-terrace-base);
	}

	/* Information */
	.todo-card--information {
		background: var(--semantic-color-surface-information-terrace);
		color: var(--semantic-color-text-on-information-terrace-subtle);
	}
	.todo-card--information .todo-card__count {
		color: var(--semantic-color-text-on-information-terrace-base);
	}

	/* Gray */
	.todo-card--gray {
		background: var(--semantic-color-surface-gray-terrace);
		color: var(--semantic-color-text-on-gray-terrace-subtle);
	}
	.todo-card--gray .todo-card__count {
		color: var(--semantic-color-text-on-gray-terrace-base);
	}
</style>

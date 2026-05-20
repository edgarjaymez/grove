<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface ITextInput {
		class?: ClassValue;
		value?: string;
		color?: 'brand' | 'gray';
		error?: boolean;
		disabled?: boolean;
		placeholder?: string;
		id?: string;
		name?: string;
		type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
		'aria-label'?: string;
		'aria-describedby'?: string;
		oninput?: (e: Event & { currentTarget: HTMLInputElement }) => void;
		onchange?: (e: Event & { currentTarget: HTMLInputElement }) => void;
		onfocus?: (e: FocusEvent) => void;
		onblur?: (e: FocusEvent) => void;
	}

	let {
		class: className,
		value = $bindable(''),
		color = 'brand',
		error = false,
		disabled = false,
		placeholder,
		id,
		name,
		type = 'text',
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		oninput,
		onchange,
		onfocus,
		onblur,
		...rest
	}: ITextInput = $props();

	const isFilled = $derived(!!value);
</script>

<input
	class={[
		'text-input',
		`text-input--${color}`,
		isFilled && 'text-input--filled',
		error && 'text-input--error',
		className
	]}
	bind:value
	{disabled}
	{placeholder}
	{id}
	{name}
	{type}
	aria-invalid={error || undefined}
	aria-label={ariaLabel}
	aria-describedby={ariaDescribedby}
	{oninput}
	{onchange}
	{onfocus}
	{onblur}
	{...rest}
/>

<style>
	.text-input {
		display: block;
		width: 100%;
		border: none;
		border-bottom: var(--border-width-heavy) solid transparent;
		border-radius: 0;
		padding: var(--soft-grid-8) var(--soft-grid-12);
		font: var(--typography-single-line-subtle-base);
		letter-spacing: var(--letter-spacing-base);
		outline: none;
		cursor: text;
		transition:
			background 300ms ease-in-out,
			border-color 300ms ease-in-out,
			color 300ms ease-in-out;
	}

	/* ---- brand ---- */
	.text-input--brand {
		background: var(--semantic-color-surface-brand-terrace);
		border-bottom-color: var(--semantic-color-border-around-brand-terrace);
		color: var(--semantic-color-text-on-brand-terrace-base);

		&::placeholder {
			color: var(--semantic-color-text-on-brand-terrace-subtle);
		}

		&:not(:disabled):hover {
			border-bottom-color: var(--semantic-color-border-around-brand-summit);
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			background: var(--semantic-color-surface-brand-summit);
			border-bottom-color: var(--semantic-color-border-around-brand-summit);
			color: var(--semantic-color-text-on-brand-summit-base);

			&::placeholder {
				color: var(--semantic-color-text-on-brand-summit-subtle);
			}
		}

		&:disabled {
			background: var(--semantic-color-surface-gray-terrace);
			border-bottom-color: var(--semantic-color-border-around-gray-terrace);
			color: var(--semantic-color-text-on-gray-path-subtle);
			cursor: not-allowed;

			&::placeholder {
				color: var(--semantic-color-text-on-gray-path-subtle);
			}
		}
	}

	/* ---- gray ---- */
	.text-input--gray {
		background: var(--semantic-color-surface-ground);
		border-bottom-color: var(--semantic-color-border-around-ground);
		color: var(--semantic-color-text-on-gray-terrace-base);

		&::placeholder {
			color: var(--semantic-color-text-on-gray-terrace-subtle);
		}

		&:not(:disabled):hover {
			background: var(--semantic-color-surface-gray-terrace);
			border-bottom-color: var(--semantic-color-border-around-gray-summit);
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			background: var(--semantic-color-surface-gray-summit);
			border-bottom-color: var(--semantic-color-border-around-gray-summit);
			color: var(--semantic-color-text-on-gray-summit-base);

			&::placeholder {
				color: var(--semantic-color-text-on-gray-summit-subtle);
			}
		}

		&:disabled {
			background: var(--semantic-color-surface-gray-path);
			border-bottom-color: var(--semantic-color-border-around-gray-path);
			color: var(--semantic-color-text-on-gray-path-subtle);
			cursor: not-allowed;

			&::placeholder {
				color: var(--semantic-color-text-on-gray-path-subtle);
			}
		}
	}

	/* ---- error (overrides color track) ---- */
	.text-input--error {
		background: var(--semantic-color-surface-danger-terrace);
		border-bottom-color: var(--semantic-color-border-around-danger-terrace);
		color: var(--semantic-color-text-on-danger-terrace-base);

		&::placeholder {
			color: var(--semantic-color-text-on-danger-terrace-subtle);
		}

		&:not(:disabled):hover {
			border-bottom-color: var(--semantic-color-border-around-danger-summit);
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			background: var(--semantic-color-surface-danger-terrace);
			border-bottom-color: var(--semantic-color-border-around-danger-summit);
		}
	}
</style>

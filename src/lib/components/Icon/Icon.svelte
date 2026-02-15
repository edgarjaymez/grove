<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface IIcon {
		class?: ClassValue;
		fillInHover?: boolean;
		isFilled?: boolean;
		unicode: string;
	}

	let { class: className, fillInHover = false, isFilled = false, unicode }: IIcon = $props();
</script>

<i class={[className, fillInHover && 'fill-hover', isFilled ? 'fill' : 'regular']}>{unicode}</i>

<style>
	i {
		width: 1lh;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-style: normal;
		font-weight: var(--font-weight-regular);
	}

	/* Icon weight styles */
	i.regular {
		font-family: var(--font-family-icons-regular) !important;
	}
	i.fill,
	i.fill-hover:hover {
		font-family: var(--font-family-icons-fill) !important;
	}
</style>

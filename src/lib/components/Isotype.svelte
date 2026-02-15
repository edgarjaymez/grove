<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface IIsotype {
		class?: ClassValue;
		color: 'base' | 'brand' | 'accent';
		size: number;
		tone: 'light' | 'dark';
	}

	let { class: className, color, size, tone }: IIsotype = $props();

	const colorMap = {
		base: { light: 'var(--color-base-dark)', dark: 'var(--color-base-light)' },
		brand: { light: 'var(--color-brand-500)', dark: 'var(--color-brand-50)' },
		accent: { light: 'var(--color-accent-500)', dark: 'var(--color-accent-50)' }
	};

	let fill = $derived(colorMap[color][tone]);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 240 240"
	fill="none"
	class={className}
>
	<path
		d="M167.383 195.976C131.811 216.443 85.9169 209.345 58.4225 173.109L45.525 180.53L32 157.023L45.3136 149.363C29.3546 108.151 47.9223 65.3487 81.6223 45.9589C107.833 30.8779 134.917 28.8626 161.504 40.4233L150.958 67.8118C132.657 60.0667 114.348 59.5256 95.418 70.4174C74.8236 82.2668 63.1119 108.111 71.3166 134.402L184.69 69.1704L197.617 91.6371C216.049 123.673 210.236 171.32 167.383 195.976ZM84.2176 158.268C102.829 180.509 131.121 184.444 154.628 170.919C175.638 158.83 188.604 134.203 173.044 107.16L84.2176 158.268Z"
		{fill}
	/>
</svg>

<style>
	svg {
		aspect-ratio: 1 / 1;
	}
</style>

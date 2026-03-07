<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import raw from '../../../DESIGN_SYSTEM.md?raw';
	import DocSection from './DocSection.svelte';

	interface IDocumentation {
		class?: ClassValue;
	}

	let { class: className }: IDocumentation = $props();

	type SectionType = 'color' | 'shadows' | 'typography' | 'generic';

	const typeMap: Record<string, SectionType> = {
		'Color System': 'color',
		Typography: 'typography',
		Shadows: 'shadows'
	};

	const sections = $derived(
		raw
			.split(/\n(?=## )/)
			.filter((block) => block.trimStart().startsWith('## '))
			.map((block) => {
				const newline = block.indexOf('\n');
				const heading = newline === -1 ? block : block.slice(0, newline);
				const body = newline === -1 ? '' : block.slice(newline + 1).trim();
				return {
					title: heading.replace(/^## /, '').trim(),
					body
				};
			})
	);
</script>

<div class={['documentation', className]}>
	{#each sections as { title, body }}
		<DocSection {title} {body} type={typeMap[title] ?? 'generic'} />
	{/each}
</div>

<style>
	.documentation {
		display: flex;
		flex-direction: column;
	}
</style>

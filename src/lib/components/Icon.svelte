<script lang="ts">
	interface IIcon {
		fillInHover?: boolean;
		isFilled?: boolean;
		lineHeight: 'multiline' | 'singleline';
		textStyle:
			| 'hero'
			| 'display'
			| 'title'
			| 'heading'
			| 'subheading'
			| 'base'
			| 'subtle'
			| 'label'
			| 'caption'
			| 'footnote';
		unicode: string;
	}

	let { fillInHover = false, isFilled = false, lineHeight, textStyle, unicode }: IIcon = $props();
</script>

<i
	class={[
		fillInHover && 'fill-hover',
		isFilled ? 'fill' : 'regular',
		lineHeight == 'multiline' ? 'multiline' : 'singleline',
		textStyle
	]}>{unicode}</i
>

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

	/* Singleline text styles */
	.hero.singleline {
		font-size: var(--typography-single-line-hero-base-font-size);
		line-height: var(--typography-single-line-hero-base-line-height);
	}
	.display.singleline {
		font-size: var(--typography-single-line-display-base-font-size);
		line-height: var(--typography-single-line-display-base-line-height);
	}
	.title.singleline {
		font-size: var(--typography-single-line-title-base-font-size);
		line-height: var(--typography-single-line-title-base-line-height);
	}
	.heading.singleline {
		font-size: var(--typography-single-line-heading-base-font-size);
		line-height: var(--typography-single-line-heading-base-line-height);
	}
	.subheading.singleline {
		font-size: var(--typography-single-line-subheading-base-font-size);
		line-height: var(--typography-single-line-subheading-base-line-height);
	}
	.base.singleline {
		font-size: var(--typography-single-line-base-base-font-size);
		line-height: var(--typography-single-line-base-base-line-height);
	}
	.subtle.singleline {
		font-size: var(--typography-single-line-subtle-base-font-size);
		line-height: var(--typography-single-line-subtle-base-line-height);
	}
	.label.singleline {
		font-size: var(--typography-single-line-label-base-font-size);
		line-height: var(--typography-single-line-label-base-line-height);
	}
	.caption.singleline {
		font-size: var(--typography-single-line-caption-base-font-size);
		line-height: var(--typography-single-line-caption-base-line-height);
	}
	.footnote.singleline {
		font-size: var(--typography-single-line-footnote-base-font-size);
		line-height: var(--typography-single-line-footnote-base-line-height);
	}

	/* Multiline text styles */
	.hero.multiline {
		font-size: var(--typography-multi-line-hero-base-font-size);
		line-height: var(--typography-multi-line-hero-base-line-height);
	}
	.display.multiline {
		font-size: var(--typography-multi-line-display-base-font-size);
		line-height: var(--typography-multi-line-display-base-line-height);
	}
	.title.multiline {
		font-size: var(--typography-multi-line-title-base-font-size);
		line-height: var(--typography-multi-line-title-base-line-height);
	}
	.heading.multiline {
		font-size: var(--typography-multi-line-heading-base-font-size);
		line-height: var(--typography-multi-line-heading-base-line-height);
	}
	.subheading.multiline {
		font-size: var(--typography-multi-line-subheading-base-font-size);
		line-height: var(--typography-multi-line-subheading-base-line-height);
	}
	.base.multiline {
		font-size: var(--typography-multi-line-base-base-font-size);
		line-height: var(--typography-multi-line-base-base-line-height);
	}
	.subtle.multiline {
		font-size: var(--typography-multi-line-subtle-base-font-size);
		line-height: var(--typography-multi-line-subtle-base-line-height);
	}
	.label.multiline {
		font-size: var(--typography-multi-line-label-base-font-size);
		line-height: var(--typography-multi-line-label-base-line-height);
	}
	.caption.multiline {
		font-size: var(--typography-multi-line-caption-base-font-size);
		line-height: var(--typography-multi-line-caption-base-line-height);
	}
	.footnote.multiline {
		font-size: var(--typography-multi-line-footnote-base-font-size);
		line-height: var(--typography-multi-line-footnote-base-line-height);
	}
</style>

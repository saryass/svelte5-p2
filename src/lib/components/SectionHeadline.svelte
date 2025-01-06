<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SectionHeadlineProps {
		children: Snippet;
		sectionName: string; // used just as identifier
	}
	let { children, sectionName }: SectionHeadlineProps = $props();
</script>

<div class="default-margin" id={sectionName}>
	<h2>{@render children()}</h2>
	<div class="underscore"></div>
</div>

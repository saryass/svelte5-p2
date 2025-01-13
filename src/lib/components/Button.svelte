<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		clickMe: () => void; // we  used  a function as props ;) so the same button can be used anywhere with a custom function ;)
		className?: string; // to make the button more flexable with styling. we can use the same button  in different  places each with custom style ;). and we made this props optional if u notice ;)
	}

	let { children, clickMe, className, ...props }: ButtonProps = $props();
</script>

<button onclick={ clickMe} class={`btn ${className}`} {...props}>
	<!--if you notice  here we say "onclick={clickMe}" which means when this button is clicked the {clickMe} props should run. Then Where ever we use this button we can make our custome function and  equilize that custom function to the (clickMe) props of the button ;).. for example in HeroSection.svelte our  custom function is "goto" ;) very very imp  to understand and very easy-->
	{@render children()}
</button>

<style>
	.btn {
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		background-color: black;
		color: white;
		font-size: 24px;
		padding: 14px 40px;
		border-radius: 10px;
	}
</style>

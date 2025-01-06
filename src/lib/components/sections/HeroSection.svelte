<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	function navigate() {  // custom function ;)
		goto('/#contact-form');
	}

	// function raz () {
	// 	console.log("choni bashi")
	// }
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Saryass</h3>
	<div class="underscore mb-m"></div>

	<h1>I'm A svelte developer crafting intuitive and performant</h1>
	<h1 class="dark-grey mb-m">Web experiences.</h1>


	<Button clickMe={navigate}>Let's Talk</Button>
	<!-- <Button clickMe={()=> console.log("choni bashi")}>Let's Talk</Button> -->
</section>

<style>
	.hero-section {
		padding-top: 60px;
	}
</style>

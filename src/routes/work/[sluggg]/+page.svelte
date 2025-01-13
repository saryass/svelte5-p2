<script lang="ts">
	let { data } = $props();

	const { company, name, dateAccomplished, stack, projectImageUrl, content } = data.project; // destructuring just to avoid writing  " <h4>{data.project.company}</h4> " and writing " <h4>{company}</h4> " instead ;)

	$inspect(data);

	//function to give the same style of the Sanity dashbord to the element ;)
	function getTagFromStyle(style: ProcessedTextContent['style']): string {
		if (style === 'normal') {
			return 'p';
		} else {
			return style;
		}
	}
</script>

<main class="work-page default-margin">
	<!-- <h4>{data.project.company}</h4> -->
	<h4>{company}</h4>
	<div class="underscore"></div>
	<h2 class="mb-s">{name}</h2>
	<img class="project-image" src={projectImageUrl} alt="" />

	<!-- below is data of (content) field -->
	<div class="project-container mt-m">
		<!-- left side: general info about the project -->
		<div class="meta-data">
			<h3 class="semi-bold">Date</h3>
			<p>{dateAccomplished.slice(0, 7)}</p>
			<h3 class="semi-bold mt-m">Tech Stack</h3>
			<ul>
				{#each stack as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>

		<!-- this div  shows the data of (content) field from sanity which is an array of (ProcessedTextContent and ProcessedImageContent);-->
		<div class="project-text">
			{#each content as block}
				{#if block.type === 'text'}
					<!--if it is content text-->
					<svelte:element this={getTagFromStyle(block.style)} class="content-text"
						>{block.textToRender}</svelte:element
					>
				{:else}
					<!--if it is content image-->
					<img class="content-image" src={block.url} alt="" />
				{/if}
			{/each}
		</div>
	</div>
</main>


<style>
    .work-page {
        padding-top: 80px;
        padding-bottom: 140px;
    }

    .project-image {
        width: 100%;
        max-height: 450px;
        object-fit: cover;
        border-radius: 40px;
    }

   .content-image {
    width: 50%;
    max-height: 250px;
    
   }

   .project-container {
    display: flex;
   }

   .meta-data {
    min-width: 200px;
   }
</style>
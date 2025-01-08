<script lang="ts">
	import type { DevExperience } from '$lib/types/sanity';
	// ************************************************************************************************************
	// used for prop drill all the way from here (AboutMeSection.svelte) to his child (ExperienceTable.svelte)
	// ************************************************************************************************************
	interface ExperienceTableProps {
		workExperience: DevExperience[];
	}

	let {workExperience}: ExperienceTableProps = $props();
	// *************************************************************************
	// *************************************************************************
</script>

<section class="work-experience default-margin mt-m">
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>

						<p class="dark-grey">
							{job.startDate?.slice(0,7)}
							/
							{#if job.endDate}
								{job.endDate?.slice(0,7)}
							{:else}
								present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past work <br />Experience</h2>
</section>

<style>
	.work-experience {
		/* border: 2px solid red; */
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.work-experience-list {
		/* border: 2px solid blue; */
		width: 50%;
	}

	.headline {
		text-align: right;
	}

	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-top: 12px;
	}

	.work-item p {
		margin-bottom: 0;
	}

	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>

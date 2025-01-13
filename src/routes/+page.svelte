<script lang="ts">
	import { HeroSection, AboutMeSection, MyWorkSection, SkillsSection } from '$components';

	const { data } = $props();

	let { workExperience, projects, skills } = data; // used for prop drill all the way from here (+page.svelte) to his child (AboutMeSection.svelte), (MyWorkSection.svelte)

	//$inspect(data); //showing fetched data in console page
	//$inspect(skills)
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<!-- <ContactSection/> -->


<!-- just showing the fetched data of (workExperience) which is directly available for this +page.svelte  no need prop drill for this +page.svelte  ;) for fun -->
<!-- <div class="default-margin my-10 border-2 border-red-400">
	{#each data.workExperience as job}
		<p>{job.jobTitle}</p>

		<p>{job.company}</p>
		<p class="bg-yellow-300">
			{job.startDate?.slice(0, 7)} / {#if job.endDate?.slice(0, 5)}
				{job.endDate}
			{:else}
				present
			{/if}
		</p>
	{/each}
</div> -->

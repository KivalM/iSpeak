<script lang="ts">
    import RoadMap from "$lib/components/app/navigation/RoadMap.svelte";
    import Icon from "@iconify/svelte";

    export let data;
</script>

<section>
    <h1 class="text-4xl font-bold text-center p-2">Roadmap</h1>

    <div class="flex flex-col gap-2 p-2">
        {#each data.curriculum as lesson}
            <RoadMap {lesson} />
        {/each}

        <!-- generate a lesson -->
        <div class="divider"></div>
        <button class="btn btn-primary">
            <Icon icon="akar-icons:plus" class="mr-2 text-xl" />
            Add more content with AI / Search curated Lessons</button
        >
    </div>
</section>

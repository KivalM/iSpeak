<script lang="ts">
    import { goto } from "$app/navigation";
    import Generator from "$lib/components/app/lessons/Generator.svelte";
    import Icon from "@iconify/svelte";

    export let data;

    let generator_open = false;
</script>

<section>
    <h1 class="text-4xl font-bold text-center p-2">Learn</h1>

    <div class="flex flex-col gap-2 p-2">
        {#if !data.lessons || data.lessons?.length === 0}
            <p class="text-center">
                No lessons found.
                <br />
                Click the button below to add more content.
            </p>
        {:else}
            {#each data.lessons as lesson}
                <!-- <RoadMap {lesson} /> -->
                <div class="card bg-base-100 max-w-lg shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">
                            {lesson.name}
                            {#if lesson.difficulty_level == 1}
                                <span class="badge badge-success">Beginner</span
                                >
                            {:else if lesson.difficulty_level <= 3}
                                <span class="badge badge-warning"
                                    >Intermediate</span
                                >
                            {:else if lesson.difficulty_level <= 5}
                                <span class="badge badge-error">Advanced</span>
                            {/if}
                        </h2>
                        <p>{lesson.description}</p>
                        <div class="card-actions justify-end">
                            <a
                                class="btn btn-primary"
                                href={`/lesson?id=${lesson.id}`}>Start</a
                            >
                        </div>
                    </div>
                </div>
            {/each}
        {/if}

        <!-- generate a lesson -->
        <div class="divider"></div>
        <button
            class="btn btn-primary"
            on:click={() => (generator_open = true)}
        >
            <Icon icon="akar-icons:plus" class="mr-2 text-xl" />
            Add more content with AI / Search Lessons
        </button>
    </div>
</section>

<Generator bind:open={generator_open} />

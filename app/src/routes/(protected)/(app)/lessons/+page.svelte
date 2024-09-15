<script lang="ts">
    import Generator from "$lib/components/app/lessons/Generator.svelte";
    import Icon from "@iconify/svelte";
    import LessonCard from "../../../../lib/components/app/lessons/LessonCard.svelte";
    import type { Tables } from "$lib/data/db/database.types";

    export let data: {
        lessons: Tables<"lessons">[];
    };

    let generator_open = false;
</script>

<section class="container mx-auto max-w-screen-lg">
    <h1 class="text-4xl font-bold text-center p-2">My Lessons</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {#each data.lessons as lesson}
            <LessonCard {lesson} />
        {/each}

        <!-- or generate a lesson -->
        <div class="card glass w-full col-span-2">
            <div class="card-body">
                <div class="flex flex-col items-center justify-center gap-2">
                    <h3 class="text-xl font-bold">Generate a Lesson</h3>
                    <p class="text-base">Generate a lesson using AI</p>
                    <button
                        class="btn btn-primary"
                        on:click={() => (generator_open = true)}
                    >
                        <Icon icon="akar-icons:plus" class="mr-2 text-xl" />
                        Generate
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<Generator bind:open={generator_open} />

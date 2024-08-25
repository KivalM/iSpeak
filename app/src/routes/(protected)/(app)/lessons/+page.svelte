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
        {:else}
            <p class="text-center">
                No lessons found.
                <br />
                Click the button below to add more content.
            </p>
        {/each}

        <!-- or generate a lesson -->
        <div class="card glass w-full col-span-2">
            <div class="card-body">
                <div class="flex flex-col items-center justify-center">
                    <h3 class="text-xl font-bold">Generate a Lesson</h3>
                    <p class="text-base">
                        Generate a lesson using AI or search for lessons
                    </p>
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

        <!-- {#if !data.lessons || data.lessons?.length === 0}
        //     <p class="text-center">
        //         No lessons found.
        //         <br />
        //         Click the button below to add more content.
        //     </p>
        // {:else}
        //     {#each data.lessons as lesson}
        //      
        //         <div class="card bg-base-100 max-w-lg shadow-xl">
        //             <div class="card-body">
        //                 <h2 class="card-title">
        //                     {lesson.name}
        //                     {#if lesson.difficulty_level == 1}
        //                         <span class="badge badge-success">Beginner</span
        //                         >
        //                     {:else if lesson.difficulty_level <= 3}
        //                         <span class="badge badge-warning"
        //                             >Intermediate</span
        //                         >
        //                     {:else if lesson.difficulty_level <= 5}
        //                         <span class="badge badge-error">Advanced</span>
        //                     {/if}
        //                 </h2>
        //                 <p>{lesson.description}</p>
        //                 <div class="card-actions justify-end">
        //                     <a
        //                         class="btn btn-primary"
        //                         href={`/lesson?id=${lesson.id}`}>Start</a
        //                     >
        //                 </div>
        //             </div>
        //         </div>
        //     {/each}
        // {/if}-->
    </div>
</section>

<Generator bind:open={generator_open} />

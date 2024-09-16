<script lang="ts">
    import type { Tables } from "$lib/data/db/database.types";
    import Icon from "@iconify/svelte";
    import LessonModal from "./LessonModal.svelte";

    export let lesson: Tables<"lessons">;
    export let deleteModalOpen: boolean = false;
    export let hideDelete: boolean = false;
</script>

<LessonModal lesson_id={lesson.id} bind:open={deleteModalOpen} />

<div class="card glass w-full">
    <div class="card-body">
        <div class="flex flex-col items-center justify-center gap-2">
            <!-- delete button -->
            {#if !hideDelete}
                <button
                    class="btn btn-ghost btn-circle absolute top-2 right-2 hover:bg-transparent"
                    on:click={() => {
                        deleteModalOpen = true;
                    }}
                >
                    <Icon
                        icon="akar-icons:trash-can"
                        class="mr-2 text-xl text-error"
                    />
                </button>
            {/if}

            <h3
                class="text-xl font-bold flex items-center gap-5 justify-between"
            >
                {lesson.name}
                {#if lesson.difficulty_level == 1}
                    <span class="badge badge-success">Beginner</span>
                {:else if lesson.difficulty_level <= 3}
                    <span class="badge badge-warning">Intermediate</span>
                {:else if lesson.difficulty_level <= 5}
                    <span class="badge badge-error">Advanced</span>
                {/if}
            </h3>

            <p class="text-base text-center">{lesson.description}</p>
            <div class="card-actions">
                <a href={`/lessons/${lesson.id}`} class="btn btn-primary">
                    {#if !lesson.created_at}
                        Continue
                    {:else}
                        Start
                    {/if}
                </a>
            </div>
        </div>
    </div>
</div>

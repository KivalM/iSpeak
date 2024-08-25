<script lang="ts">
    import type { Tables } from "$lib/data/db/database.types";

    export let lesson: Tables<"lessons">;
</script>

<div class="card glass w-full">
    <div class="card-body">
        <div class="flex flex-col items-center justify-center">
            <h3 class="text-xl font-bold">{lesson.name}</h3>
            <p class="text-base">{lesson.description}</p>
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

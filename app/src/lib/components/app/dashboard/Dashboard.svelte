<script lang="ts">
    import type { Tables } from "$lib/data/db/database.types";
    import Continue from "../../app/dashboard/Continue.svelte";
    import Stats from "../../app/dashboard/Stats.svelte";

    export let last_lesson: Tables<"lessons">;
    export let lessons: Tables<"lessons">[] = [];

    export let incomplete_lessons = lessons.filter(
        (lesson) => lesson.id !== last_lesson.id,
    );

    export let stats = {
        words_learned: 100,
        completed_lessons: 10,
        total_lessons: 20,
        days_streak: 5,
        longest_streak: 10,
    };
</script>

<div class="container mx-auto flex flex-col gap-4 items-center justify-center">
    {#if incomplete_lessons && incomplete_lessons.length > 0}
        <Continue lessons={incomplete_lessons} />
    {/if}

    {#if stats}
        <Stats {stats} />
    {/if}
</div>

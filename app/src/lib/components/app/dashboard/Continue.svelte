<script lang="ts">
    import type { Tables } from "$lib/data/db/database.types";
    import LessonCard from "../lessons/LessonCard.svelte";

    export let lessons: Tables<"lessons">[];
</script>

<section>
    <h2>Continue Learning</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each lessons as lesson}
            <LessonCard {lesson} />
        {/each}
    </div>
</section>

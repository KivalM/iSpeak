<script lang="ts">
    import { sineIn } from "svelte/easing";
    import Milestone from "./Milestone.svelte";

    export let lesson;

    let offset = (i: number) => {
        let offset = sineIn(i + 2) * 100;
        return offset;
    };
</script>

<div class="divider text-2xl">{lesson.title}</div>
<div class="text-xl text-center">{lesson.description}</div>

<div class="flex flex-wrap flex-col justify-center items-center gap-2">
    {#each lesson.steps as milestone, i}
        <div class="translate-x-[{offset(i)}px]">
            <Milestone {milestone} />
        </div>
    {/each}
</div>

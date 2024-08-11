<script lang="ts">
    import Lesson from "$lib/components/app/lessons/Lesson.svelte";

    export let data;

    let word = data.content[0];

    let current = 0;

    const next = () => {
        if (current === data.content.length - 1) {
            current = 0;
            word = data.content[current];
            return;
        } else {
            current = current + 1;
            word = data.content[current];
        }
    };

    const previous = () => {
        if (current === 0) {
            current = data.content.length - 1;
            word = data.content[current];
            return;
        } else {
            current = current - 1;
            word = data.content[current];
        }
    };
</script>

<div class="container flex mx-auto items-center justify-center flex-col gap-6">
    <Lesson {word} />

    <!-- buttons -->

    <div class="flex justify-center gap-4">
        <button class="btn btn-primary" on:click={previous}>Previous</button>
        <button class="btn btn-primary" on:click={next}>Next</button>
    </div>
</div>

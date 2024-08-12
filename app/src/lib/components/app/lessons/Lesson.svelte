<script lang="ts">
    import Icon from "@iconify/svelte";
    import MicRecorder from "./MicRecorder.svelte";
    let feedback = { feedback: "", errors: [], rating: 0 };
    export let word;
</script>

<div class="card lg:card-side bg-base-100 shadow-xl max-w-md">
    <div class="card-body items-center gap-4">
        <h2 class="card-title">{word}</h2>
        <p>Try saying it</p>
        <div class="card-actions justify-end w-full">
            <MicRecorder {word} bind:feedback />
        </div>

        <div class="">
            <h3>Feedback</h3>
            <p>Rating: {feedback.rating}/5</p>
            <p>{feedback.feedback}</p>
            {#if feedback.errors.length > 0}
                <h3>Errors</h3>
                <ul>
                    {#each feedback.errors as error}
                        <li>{error}</li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
</div>

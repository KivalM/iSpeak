<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Icon from "@iconify/svelte";
    import Word from "./Word.svelte";
    import MicRecorder from "../recorder/MicRecorder.svelte";
    import Feedback from "./Feedback.svelte";
    export let processing: boolean = false;

    let dispatch = createEventDispatcher();
    function finish(e: CustomEvent) {
        dispatch("done", {
            blob: e.detail.blob,
        });
    }

    export let phrase: string;
    export let feedback: any | null;
    $: console.log(feedback);
    $: words = phrase.split(" ");
</script>

<div class="flex flex-col gap-4 items-center">
    <input name="phrase" value={phrase} type="text" hidden />
    <div class="flex flex-wrap gap-4 items-center">
        {#each words as word}
            <Word {word}></Word>
        {/each}
        <!-- tts with icon -->
        <button
            class="btn btn-ghost btn-circle"
            on:click|preventDefault={() => {}}
        >
            <Icon icon="mdi:volume-high" width="2rem" height="2rem" />
        </button>
    </div>
    <div class="divider m-0"></div>
    <!-- Mic Recorder -->
    <MicRecorder on:done={finish} pause={processing} />
    {#if feedback}
        <Feedback {feedback} />
    {/if}
</div>

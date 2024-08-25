<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Icon from "@iconify/svelte";
    import Word from "./Word.svelte";
    import MicRecorder from "../recorder/MicRecorder.svelte";
    import Feedback from "./Feedback.svelte";

    let dispatch = createEventDispatcher();
    function finish(e: CustomEvent) {
        dispatch("done", {
            blob: e.detail.blob,
        });
    }

    export let phrase: string;
    export let feedback: any | null = {
        word: "dolphin",
        ipa: "d ɑː l f ə n",
        phonemes: "dɒlfɪn",
        score: 0.5714285714285714,
        feedback: {
            general_feedback: [
                "Great try! You're on the right track with the word 'dolphin'. Let's break it down and see how we can improve your pronunciation.",
                "The first part of the word sounds good! You've got the 'dol' part down.",
                "The second part of the word needs a little work. Let's focus on that 'phin' sound.",
                "Remember, 'dolphin' has two syllables: 'dol-phin'. Try to say it with a short pause between these two parts.",
                "The 'ph' in 'dolphin' makes an 'f' sound, like in 'phone' or 'photo'. Make sure you're using this 'f' sound instead of a regular 'p' sound.",
                "The last part of the word should sound like 'in', rhyming with 'pin' or 'win'.",
            ],
            suggestions: [
                {
                    word: "dolphin",
                    suggestions: [
                        "Try saying it as 'dol-fin'",
                        "Practice the 'f' sound in 'phin'",
                        "Make sure to pronounce the 'in' at the end clearly",
                    ],
                    importance: 90,
                },
            ],
        },
    };
    $: words = phrase.split(" ");
</script>

<div class="flex flex-col gap-4 items-center">
    <input name="phrase" value={phrase} type="text" hidden />
    <div class="flex flex-wrap gap-4 items-center">
        {#each words as word}
            <Word {word}></Word>
        {/each}
        <!-- tts with icon -->
        <button class="btn btn-ghost btn-circle">
            <Icon icon="mdi:volume-high" width="2rem" height="2rem" />
        </button>
    </div>

    <!-- Mic Recorder -->
    <MicRecorder on:done={finish} />

    {#if feedback}
        <Feedback {feedback} />
    {/if}
</div>

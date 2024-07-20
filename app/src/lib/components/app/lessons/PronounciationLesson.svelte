<script lang="ts">
    import Icon from "@iconify/svelte";

    export let data;
    console.log(data);

    import { onMount } from "svelte";

    let recording = false;
    let media = [];
    let mediaRecorder = null;
    onMount(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => media.push(e.data);
        mediaRecorder.onstop = function () {
            const audio = document.querySelector("audio");
            const blob = new Blob(media, { type: "audio/wav; codecs=opus" });
            media = [];
            audio.src = window.URL.createObjectURL(blob);
            alert("Recording stopped");
            alert("Audio URL: " + audio.src);
        };
    });

    function startRecording() {
        recording = true;
        mediaRecorder.start();
    }

    function stopRecording() {
        recording = false;
        mediaRecorder.stop();
    }

    let current_word = 0;
    let total_words = data.words.length;

    let word = data.words[current_word];
    $: word = data.words[current_word];

    // handle word change
    const nextWord = () => {
        if (current_word < total_words - 1) {
            current_word++;
        }
    };

    const finish = () => {
        // finish the lesson
    };

    const previousWord = () => {
        if (current_word > 0) {
            current_word--;
        }
    };
</script>

<div class="container mx-auto flex flex-col justify-between gap-4 grow p-4">
    <div></div>

    <!-- word box -->
    <div class="flex flex-col items-center gap-4">
        <div
            class="min-w-[300px] p-4 bg-base-200 rounded-lg flex flex-col gap-4"
        >
            <div class="text-2xl font-bold">Try saying:</div>

            <div class="text-6xl font-bold text-center">{word}</div>

            <!-- get mic button -->
            <button
                class="btn text-2xl"
                class:bg-primary={recording}
                class:bg-accent={!recording}
                on:click={recording ? stopRecording : startRecording}
            >
                {#if recording}
                    Stop
                {:else}
                    Start
                {/if}
                <Icon icon="mdi:microphone" class="text-2xl " />
                <!-- hidden audio component -->
            </button>
            <audio controls></audio>
        </div>
    </div>

    <div class="flex items-center justify-center gap-4">
        <button class="btn btn-accent text-2xl" on:click={previousWord}>
            <Icon icon="mdi:arrow-left" class="text-2xl" />
            Back
        </button>

        {#if current_word === total_words - 1}
            <button class="btn btn-primary text-2xl" on:click={finish}>
                Finish
                <Icon icon="fxemoji:star" class="text-2xl invert" />
            </button>
        {:else}
            <button class="btn btn-primary text-2xl" on:click={nextWord}>
                Next
                <Icon icon="mdi:arrow-right" class="text-2xl" />
            </button>
        {/if}
    </div>
</div>

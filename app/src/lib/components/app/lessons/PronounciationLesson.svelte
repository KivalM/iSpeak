<script lang="ts">
    import Icon from "@iconify/svelte";

    export let data;
    console.log(data);

    import { onMount } from "svelte";
    let mic_btn;
    let recording = false;
    let media = [];
    let mediaRecorder = null;
    let feedback_txt = "";
    onMount(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => media.push(e.data);
        mediaRecorder.onstop = async function () {
            const audio = document.querySelector("audio");
            const blob = new Blob(media, { type: "audio/ogg; codecs=opus" });
            media = [];
            audio.src = window.URL.createObjectURL(blob);

            mic_btn.disabled = true;

            // post the audio file to the server
            let text = await postAudio(blob);
            console.log(text);
            let feedback = await postIpa(text, word);
            feedback_txt = feedback;

            mic_btn.disabled = false;
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

    // export a variable progress and allow it to be bound
    // to the progress bar in the UI
    export let progress = 0;
    $: progress = ((current_word + 1) / total_words) * 100.0;

    // handle word change
    const nextWord = () => {
        if (current_word < total_words - 1) {
            current_word++;
            feedback_txt = "";
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

    let api_route = "http://localhost:8000/";
    let ipa = "http://localhost:8000/transcribe";
    let fb = "http://localhost:8000/feedback";

    // function to post the audio file to the server
    async function postAudio(blob) {
        const formData = new FormData();
        formData.append("audio_file", blob, "audio.ogg");

        const response = await fetch(ipa, {
            method: "POST",
            body: formData,
            // access control allow origin
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });

        const data = await response.json();
        return data.text;
    }

    // post an ipa string and get feedback
    async function postIpa(ipa, word) {
        const response = await fetch(
            fb + "?ipa=" + ipa + "&word=" + word,

            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        const data = await response.json();
        return data;
    }
</script>

<div class="container mx-auto flex flex-col justify-between gap-4 grow p-4">
    <div></div>

    <!-- word box -->
    <div class="flex flex-col items-center gap-4">
        <div
            class="min-w-[300px] p-4 bg-base-200 rounded-lg flex flex-col gap-4"
        >
            <div class="text-2xl font-bold">Try saying:</div>

            <button class="text-6xl font-bold text-center">{word}</button>

            <!-- get mic button -->
            <button
                class="btn text-2xl"
                class:bg-primary={recording}
                class:bg-accent={!recording}
                on:click={recording ? stopRecording : startRecording}
                bind:this={mic_btn}
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

        <!-- feedback box -->
        <div
            class="min-w-[300px] p-4 bg-base-200 rounded-lg flex flex-col gap-4"
        >
            <div class="text-2xl font-bold">Feedback:</div>
            <div class="text-xl">{feedback_txt}</div>
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

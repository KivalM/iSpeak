<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount, createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    function finish(media: Blob) {
        dispatch("done", {
            blob: media,
        });
    }
    let mediaRecorder: MediaRecorder;
    export let media: Blob[] = [];
    let audio: HTMLAudioElement;
    let mic_btn: HTMLButtonElement;
    let recording = false;
    let src = "";
    let blob: Blob;
    onMount(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => media.push(e.data);
        mediaRecorder.onstop = async function () {
            blob = new Blob(media, { type: "audio/ogg; codecs=opus" });
            src = window.URL.createObjectURL(blob);

            // add the audio file to the audio element
            audio.src = src;
            // audio.play();
        };
    });

    function stopRecording() {
        recording = false;
        mediaRecorder.stop();
        finish(blob);
    }
    function startRecording() {
        media = [];
        recording = true;
        mediaRecorder.start();
    }
    function toggleRecording() {
        if (recording) {
            stopRecording();
        } else {
            startRecording();
        }
    }
</script>

{#if mediaRecorder}
    <button
        class="btn btn-accent btn-circle"
        on:click|preventDefault={toggleRecording}
    >
        {#if recording}
            <Icon icon="mdi:stop" width="2rem" height="2rem" />
        {:else}
            <Icon icon="mdi:microphone" width="2rem" height="2rem" />
        {/if}
    </button>
    <audio controls bind:this={audio} {src} class=""></audio>
{/if}

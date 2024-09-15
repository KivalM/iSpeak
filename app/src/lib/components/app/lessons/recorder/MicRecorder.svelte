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
    export let pause = false;
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
            audio.src = src;
            finish(blob);
        };
    });

    function stopRecording() {
        recording = false;
        mediaRecorder.stop();
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

{#if mediaRecorder && !pause}
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
    <audio controls bind:this={audio} {src} class="hidden"></audio>
{:else}
    <span class="loading loading-spinner loading-sm"></span>
{/if}

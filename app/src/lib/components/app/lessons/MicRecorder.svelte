<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
    import {
        MediaRecorder,
        register,
        type IMediaRecorder,
    } from "extendable-media-recorder";
    import { connect } from "extendable-media-recorder-wav-encoder";

    let mediaRecorder: IMediaRecorder;
    let media: Blob[] = [];
    let audio: HTMLAudioElement;
    let mic_btn: HTMLButtonElement;
    let src = "";
    let recording = false;
    let url = "/lesson";

    onMount(async () => {
        await register(await connect());

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        mediaRecorder = new MediaRecorder(stream, {
            mimeType: "audio/wav",
        });
        const { sampleRate } = stream.getAudioTracks()[0].getSettings();
        console.log("sampleRate", sampleRate);
        mediaRecorder.ondataavailable = (e) => media.push(e.data);
        mediaRecorder.onstop = async function () {
            const blob = new Blob(media, { type: "audio/wav" });
            media = [];
            src = window.URL.createObjectURL(blob);

            mic_btn.disabled = true;

            // post the audio file to the server
            const formData = new FormData();
            formData.append("audio_file", blob);
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log("data", data);
            mic_btn.disabled = false;
        };
    });

    function startRecording() {
        console.log("start recording");
        mediaRecorder.start();
        recording = true;
    }

    function stopRecording() {
        console.log("stop recording");
        mediaRecorder.stop();
        recording = false;
    }

    function toggleRecording() {
        if (mediaRecorder.state === "recording") {
            stopRecording();
        } else {
            startRecording();
        }
    }
</script>

<button
    class="btn text-2xl btn-primary w-full"
    bind:this={mic_btn}
    on:click={toggleRecording}
>
    {#if recording}
        <Icon icon="mdi:stop" class="text-2xl " />
        Stop
    {:else}
        <Icon icon="mdi:microphone" class="text-2xl " />
        Record
    {/if}
    <!-- hidden audio component -->
</button>
<audio controls bind:this={audio} {src}></audio>

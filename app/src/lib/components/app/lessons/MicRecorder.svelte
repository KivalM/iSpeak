<script lang="ts">
    import { deserialize } from "$app/forms";
    import { PUBLIC_TRANSCRIPTION_API_URL } from "$env/static/public";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
    // import {
    //     MediaRecorder,
    //     register,
    //     type IMediaRecorder,
    // } from "extendable-media-recorder";
    // import { connect } from "extendable-media-recorder-wav-encoder";

    let mediaRecorder: MediaRecorder;
    let media: Blob[] = [];
    let audio: HTMLAudioElement;
    let mic_btn: HTMLButtonElement;
    let src = "";
    let recording = false;
    let url = "/lesson";

    export let feedback = {
        errors: [],
        feedback: "",
        rating: 0,
    };
    export let word = "";

    onMount(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        mediaRecorder = new MediaRecorder(stream);
        const { sampleRate } = stream.getAudioTracks()[0].getSettings();
        console.log("sampleRate", sampleRate);
        mediaRecorder.ondataavailable = (e) => media.push(e.data);
        mediaRecorder.onstop = async function () {
            const blob = new Blob(media, { type: "audio/ogg; codecs=opus" });

            media = [];
            src = window.URL.createObjectURL(blob);

            mic_btn.disabled = true;

            // post the audio file to the server
            const formData = new FormData();
            formData.append("audio_file", blob, "audio.ogg");
            formData.append("word", word);

            // get the ipa response
            const response = await fetch(
                PUBLIC_TRANSCRIPTION_API_URL + "/transcribe?word=" + word,
                {
                    method: "POST",
                    body: formData,
                },
            );

            const data = await response.json();
            console.log("data", data);

            // send the data to the backend
            const formData2 = new FormData();
            formData2.append("word", word);
            formData2.append("ipa", data.ipa);
            formData2.append("phonemes", data.phonemes);

            const response2 = await fetch(url, {
                method: "POST",
                body: formData2,
                headers: {
                    "x-sveltekit-action": "true",
                },
            });

            const data2 = deserialize(await response2.text());
            console.log("data2", data2);

            feedback = data2.data;

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
<audio controls bind:this={audio} {src} class="w-full"></audio>

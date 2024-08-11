<script lang="ts">
    import Icon from "@iconify/svelte";
    import MicRecorder from "./MicRecorder.svelte";

    export let word;
</script>

<div class="card lg:card-side bg-base-100 shadow-xl w-96">
    <div class="card-body items-center gap-4">
        <h2 class="card-title">{word}</h2>
        <p>Try saying it</p>
        <div class="card-actions justify-end w-full">
            <MicRecorder />
        </div>
    </div>
</div>

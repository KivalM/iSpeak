<script lang="ts">
    import { enhance } from "$app/forms";
    import Icon from "@iconify/svelte";
    import { error } from "@sveltejs/kit";
    import { onMount } from "svelte";

    export let open: boolean = true;
    let config = {
        sensitivity: 0.5,
        showPhonemes: true,
        saveAudio_anon: true,
    };

    onMount(() => {
        let storageconfig = localStorage.getItem("FeedbackConfig");
        if (storageconfig) {
            config = JSON.parse(storageconfig);
        }
    });
</script>

<dialog id="my_modal_4" class="modal" class:modal-open={open}>
    <div class="modal-box">
        <form method="dialog">
            <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                aria-label="Close"
                on:click={() => (open = false)}>✕</button
            >
        </form>
        <form method="POST" class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold text-center">
                Feedback Configuration
            </h2>
            <div class="flex flex-col gap-4">
                <label>
                    <input type="checkbox" bind:checked={config.showPhonemes} />
                    Show phonemes
                </label>
                <label>
                    <input
                        type="checkbox"
                        bind:checked={config.saveAudio_anon}
                    />
                    Save audio(Anonymous)
                </label>
                <label class="input input-bordered flex items-center gap-2">
                    Feedback Sensitivity({config.sensitivity}):
                    <input
                        type="range"
                        min={0}
                        max={1}
                        bind:value={config.sensitivity}
                        step="0.1"
                        class="range range-primary"
                    />
                </label>
            </div>
            <button
                class="btn btn-primary"
                on:click|preventDefault={() => {
                    localStorage.setItem(
                        "FeedbackConfig",
                        JSON.stringify(config),
                    );
                    open = false;
                }}
            >
                Save
            </button>
        </form>
    </div>
</dialog>

<script lang="ts">
    import { enhance } from "$app/forms";
    import Icon from "@iconify/svelte";
    import { error } from "@sveltejs/kit";

    export let open: boolean = true;
    let generating = false;
</script>

<dialog id="my_modal_3" class="modal" class:modal-open={open}>
    <div class="modal-box">
        <form method="dialog">
            <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                aria-label="Close"
                on:click={() => (open = false)}>✕</button
            >
        </form>
        <form
            method="POST"
            action="/lessons/?/generate"
            class="flex flex-col gap-4"
            use:enhance={({}) => {
                generating = true;
                return async ({ result, update }) => {
                    if (result) {
                        generating = false;
                        update();
                        open = false;
                    } else {
                        generating = false;
                        error(500, "Failed to generate lesson");
                    }
                };
            }}
        >
            <h2 class="text-2xl font-bold text-center">Generate a Lesson</h2>
            <label
                class="input input-bordered flex items-center gap-2 input-primary"
            >
                <Icon icon="akar-icons:search" class="w-6 h-6" />
                <input
                    type="text"
                    class="grow"
                    placeholder="Generate a lesson based on a prompt"
                    name="prompt"
                />
            </label>

            {#if generating}
                <div class="alert alert-info">
                    <span class="loading loading-spinner loading-sm"
                    ></span>Generating...
                </div>
            {:else}
                <!-- set generatomg to true then submit -->
                <button class="btn btn-primary" class:disabled={generating}>
                    Generate with AI
                </button>
            {/if}
        </form>
    </div>
</dialog>

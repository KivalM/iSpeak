<script lang="ts">
    import Icon from "@iconify/svelte";

    export let open: boolean = true;
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
        <form method="POST" action="/learn" class="flex flex-col gap-4">
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
            <button class="btn btn-primary">Search</button>
        </form>
    </div>
</dialog>

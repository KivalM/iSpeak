<script lang="ts">
    export let open: boolean = true;
    export let message: string = "Delete this item?";
    export let lesson_id: string;
</script>

<dialog id="my_modal_5" class="modal" class:modal-open={open}>
    <div class="modal-box">
        <form method="dialog">
            <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                aria-label="Close"
                on:click={() => (open = false)}>✕</button
            >
        </form>
        <form
            class="flex flex-col gap-4"
            method="POST"
            action="/lessons/?/delete"
        >
            <h2 class="text-2xl font-bold text-center">
                {message}
            </h2>
            <div class="flex flex-row gap-4">
                <input type="hidden" name="lesson_id" value={lesson_id} />
                <button class="btn btn-primary"> Delete </button>

                <button
                    class="btn btn-ghost"
                    on:click|preventDefault={() => {
                        open = false;
                    }}
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
</dialog>

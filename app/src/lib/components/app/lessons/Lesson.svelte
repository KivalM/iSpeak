<script lang="ts">
    import Icon from "@iconify/svelte";
    import MicRecorder from "./MicRecorder.svelte";
    let feedback = {
        feedback:
            "lorem ipsum. lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        errors: ["error 1", "error 2", "error 3", "error 4"],
        rating: 0,
    };
    export let word;

    $: {
        feedback = { feedback: "", errors: [], rating: 0 };
    }
</script>

<div
    class="card lg:card-side bg-base-100 shadow-xl max-w-md p-6 border border-accent"
>
    <div class="card-body items-center gap-10">
        <h2 class="card-title text-5xl">
            {word}
        </h2>
        <div class="card-actions justify-end w-full">
            <MicRecorder {word} bind:feedback />
        </div>

        {#if feedback.feedback != ""}
            <div class="w-full flex flex-col items-center">
                <h3 class="text-2xl">Feedback</h3>
                <div class="rating rating-lg">
                    {#each Array(5) as _, i}
                        <input
                            type="radio"
                            name="rating-8"
                            class="mask mask-star-2 bg-orange-400"
                            checked={i < feedback.rating ? "checked" : ""}
                        />
                    {/each}
                </div>
                <p>{feedback.feedback}</p>
                {#if feedback.errors.length > 0}
                    <h3 class="text-error text-2xl divider">Errors</h3>
                    <ul>
                        {#each feedback.errors as error}
                            <li>
                                <div class="badge badge-error">{error}</div>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        {/if}
    </div>
</div>

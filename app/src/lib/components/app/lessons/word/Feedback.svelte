<script lang="ts">
    import Icon from "@iconify/svelte";
    import { round } from "@xenova/transformers";

    export let feedback;
    console.log(feedback);
    let score = Number.parseFloat(feedback.score);
    let score_percent = round(score, 4) * 100;

    let score_class =
        score_percent > 70
            ? "btn-success"
            : score_percent > 50
              ? "btn-warning"
              : "btn-error";
</script>

<div class="div glass max-w-screen-md">
    <div class="flex flex-col gap-4 items-center p-6">
        <div class="flex flex-col gap-4 items-center">
            <div class="btn {score_class}">
                Accuracy: {score_percent}%
            </div>

            <div>
                <div class="flex flex-row gap-4 items-stretch justify-center">
                    {#each feedback.op_codes as code}
                        {#if code[0] === "equal"}
                            <div class="text-success-content bg-success p-1">
                                {code[1]}
                            </div>
                        {:else if code[0] === "insert"}
                            <div class="text-warning-content bg-warning p-1">
                                {code[1]}
                            </div>
                        {:else if code[0] === "delete"}
                            <div class="text-error-content bg-error p-1">
                                {code[1]}
                            </div>
                        {:else if code[0] === "replace"}
                            <div
                                class="text-warning-content bg-warning p-1 flex flex-row gap-1 items-center justify-center"
                            >
                                {code[1]}
                                <Icon
                                    icon="mdi:arrow-right"
                                    width="1rem"
                                    height="1rem"
                                    class="text-content"
                                />
                                {#if code[2] === " "}
                                    '{code[2]}'
                                {:else}
                                    {code[2]}
                                {/if}
                            </div>
                        {/if}
                    {/each}
                    <!-- right arrow -->
                    <Icon icon="mdi:arrow-right" width="2rem" height="2rem" />
                    <div class="text-success-content bg-success p-1">
                        {feedback.target_ipa}
                    </div>
                </div>
            </div>

            <p>{feedback.feedback.general_feedback}</p>

            {#each feedback.feedback.suggestions as suggestion}
                <div class="flex flex-row gap-4 items-stretch justify-center">
                    <div class="text-success-content bg-success p-1">
                        {suggestion.segment}
                    </div>
                    <Icon icon="mdi:arrow-right" width="2rem" height="2rem" />

                    <div class="text-warning-content bg-warning p-1">
                        {suggestion.suggestions}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<!-- Feedback: -->
<!-- <div class="btn {score_class}"> -->
<!-- Accuracy: {score_percent}% -->
<!-- </div> -->
<!--  -->
<!-- <p>{feedback.feedback.general_feedback}</p> -->
<!-- </div> -->

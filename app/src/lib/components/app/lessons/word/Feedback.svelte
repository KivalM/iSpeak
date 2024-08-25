<script lang="ts">
    import { round } from "@xenova/transformers";

    export let feedback;
    console.log(feedback);
    let score = Number.parseFloat(feedback.score);
    console.log(score);
    let score_percent = round(score, 4) * 100;
    console.log(score_percent);
    let score_class =
        score_percent > 70
            ? "btn-success"
            : score_percent > 50
              ? "btn-warning"
              : "btn-error";
</script>

<div class="card glass max-w-screen-md">
    <div class="card-body">
        <h2 class="card-title">Feedback</h2>
        <div class="btn {score_class}">
            Accuracy:
            {round(Number.parseFloat(feedback.score), 4) * 100}%
        </div>
        <p>{feedback.feedback.general_feedback}</p>

        <div class="card-actions justify-end">
            <button class="btn btn-primary">Learn now!</button>
        </div>
    </div>
</div>

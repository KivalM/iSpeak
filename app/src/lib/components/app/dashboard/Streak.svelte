<script>
    import Icon from "@iconify/svelte";
</script>

<div class="card card-compact bg-base-300 p-4 shadow-xl">
    <div class="card-body items-center justify-center">
        <h2 class="card-title">Your Streak</h2>
        <Icon icon="bx:bxs-medal" class="text-5xl text-accent" />
        <p class="text-center">You're on a 3 day streak!</p>
        <div class="card-actions justify-end">
            <button class="btn btn-accent">Jump Back In!</button>
        </div>
    </div>
</div>

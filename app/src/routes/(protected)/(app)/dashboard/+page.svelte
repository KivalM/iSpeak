<script>
    import Metrics from "$lib/components/app/dashboard/Metrics.svelte";
    import Report from "$lib/components/app/dashboard/Report.svelte";
    import Streak from "$lib/components/app/dashboard/Streak.svelte";
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="flex gap-4">
        <Report />
        <Streak />
        <Metrics />
    </div>
</div>

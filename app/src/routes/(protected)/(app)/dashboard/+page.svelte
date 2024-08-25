<script lang="ts">
    import Dashboard from "$lib/components/app/dashboard/Dashboard.svelte";
    export let data: {
        last_lesson: any;
        lessons: any[];
    };
</script>

<div class="container mx-auto max-w-screen-lg">
    <Dashboard last_lesson={data.last_lesson} lessons={data.lessons} />
</div>

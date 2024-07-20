<script>
    import { page } from "$app/stores";
    import Sidebar from "$lib/components/app/navigation/Sidebar.svelte";
    import TopBar from "$lib/components/app/navigation/TopBar.svelte";
    export let data;
</script>

<div class="flex">
    <Sidebar courses={data.courses} />

    <div class="w-full max-w-2xl mx-auto">
        <TopBar user={data.user} courses={data.courses} />

        <slot />
    </div>
</div>

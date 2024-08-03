<script>
    import { page } from "$app/stores";
    import Sidebar from "$lib/components/app/navigation/Sidebar.svelte";
    import TopBar from "$lib/components/app/navigation/TopBar.svelte";
    export let data;
</script>

<div class="flex flex-col">
    <TopBar user={data.profile} courses={data.courses} />

    <div class="w-full flex">
        <Sidebar courses={data.courses} />
        <div class="flex justify-center flex-1">
            <slot />
        </div>
    </div>
</div>

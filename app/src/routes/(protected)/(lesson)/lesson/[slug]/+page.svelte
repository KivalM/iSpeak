<script lang="ts">
    import { goto } from "$app/navigation";
    import PronounciationLesson from "$lib/components/app/lessons/PronounciationLesson.svelte";
    import Icon from "@iconify/svelte";

    export let data;
    let progress = 0;
</script>

<div class="flex flex-col min-h-screen">
    <div class="navbar bg-base-200">
        <div class="navbar-start">
            <button
                class="btn btn-ghost btn-circle text-2xl"
                on:click={() => goto("/learn")}
            >
                <Icon icon="material-symbols:close" />
            </button>
        </div>
        <div class="navbar-center">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl font-bold text-center">{data.title}</h1>
                <progress
                    class="progress progress-primary w-56"
                    value={progress}
                    max="100"
                ></progress>
            </div>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost text-xl">
                <!-- next -->
                <!-- Skip
            <Icon icon="mdi:arrow-right" class="text-2xl" /> -->
            </button>
        </div>
    </div>

    <PronounciationLesson {data} bind:progress />
</div>

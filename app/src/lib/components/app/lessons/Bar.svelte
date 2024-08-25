<script lang="ts">
    import Icon from "@iconify/svelte";

    export let data;
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <!-- back to menu -->
        <a href="/learn" class="btn btn-ghost text-xl">
            <Icon icon="akar-icons:arrow-left" class="w-6 h-6" />
            Back to Lessons
        </a>
    </div>
    <div class="navbar-center">
        <div class="flex flex-col">
            <div class="btn btn-ghost text-xl">{data.lesson?.name}</div>
            <progress class="progress progress-primary w-56" value="0" max="100"
            ></progress>
        </div>
    </div>
    <div class="navbar-end"></div>
</div>

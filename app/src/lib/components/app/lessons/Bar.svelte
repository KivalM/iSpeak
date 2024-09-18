<script lang="ts">
    import Icon from "@iconify/svelte";
    import FeedbackConfig from "./word/FeedbackConfig.svelte";

    export let name: string = "Greetings";
    export let description: string =
        "Learn how to greet people in different languages";
    export let progress: number = 20;
    export let max_progress: number = 100;
    export let open: boolean = false;
    export let barURL: string = "/lessons";
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start"></div>
    <div class="navbar-center">
        <div class="flex flex-col gap-1 p-2">
            <div class="">
                <!-- help button that shows description on hover -->
                <div
                    class="tooltip tooltip-bottom cursor-help text-xl text-center flex items-center justify-center gap-2"
                    data-tip={description}
                >
                    {name}
                    <Icon
                        icon="material-symbols:help-outline"
                        width="1.2rem"
                        height="1.2rem"
                    />
                </div>
            </div>
            <div
                class="tooltip tooltip-bottom cursor-help"
                data-tip="Progress: {progress + 1}/{max_progress}"
            >
                <progress
                    class="progress progress-primary w-56"
                    value={progress + 1}
                    max={max_progress}
                ></progress>
            </div>
        </div>
    </div>
    <div class="navbar-end">
        <!-- close -->
        <a
            href="/set"
            class="btn btn-ghost text-xl"
            on:click|preventDefault={() => {
                open = true;
            }}
        >
            <Icon icon="mdi:settings" width="2rem" height="2rem" />
        </a>
        <a href={barURL} class="btn btn-ghost text-xl">
            <Icon icon="material-symbols:close" width="2rem" height="2rem" />
        </a>
    </div>
</div>

<FeedbackConfig bind:open></FeedbackConfig>

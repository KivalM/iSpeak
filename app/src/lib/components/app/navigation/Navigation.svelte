<script lang="ts">
    import Icon from "@iconify/svelte";
    export let tab: string | null = "My Lessons";
    import { page } from "$app/stores";
    $: page.subscribe((value) => {
        tab = value.url.pathname;
    });
</script>

<div class="menu menu-lg menu-horizontal justify-center w-full p-0 bg-base-200">
    <li>
        <a
            href="/dashboard"
            class="text-2xl"
            class:active={tab === "/dashboard"}
        >
            <Icon icon="mage:dashboard-cross" />
            Dashboard
        </a>
    </li>
    <li>
        <a href="/lessons" class="text-2xl" class:active={tab === "/lessons"}>
            <Icon icon="mingcute:notebook-fill" />
            My Lessons
        </a>
    </li>
    <li>
        <a
            href="/notebooks"
            class="text-2xl"
            class:active={tab === "/notebooks"}
        >
            <Icon icon="mingcute:book-3-line" />
            My Notebooks
        </a>
    </li>
</div>

<script lang="ts">
    import Icon from "@iconify/svelte";
    import Flag from "../Flag.svelte";

    export let active_tab = "learn";
    export let courses;
</script>

<div class="flex justify-between flex-col bg-base-200 rounded-box w-64 py-2">
    <ul class="menu menu-lg">
        <li>
            <a href="/learn" class="text-5xl text-primary">iSpeak </a>
        </li>

        <li>
            <a
                href="/learn"
                class="text-2xl"
                class:active={active_tab === "learn"}
            >
                <Icon icon="fxemoji:bluebook" />
                Learn
            </a>
        </li>
        <li>
            <a
                href="/notebook"
                class="text-2xl"
                class:active={active_tab === "notebook"}
            >
                <Icon icon="fxemoji:openbook" />
                Notebooks
            </a>
        </li>
        <li>
            <details open>
                <summary class="text-2xl">
                    <Icon icon="fxemoji:books" />
                    My Courses
                </summary>

                <ul>
                    {#each courses as course}
                        <li>
                            <a
                                href="/learn?{course.id}"
                                class="text-lg"
                                class:active={course.active}
                            >
                                <Flag language={course.language} />
                            </a>
                        </li>
                    {/each}
                    <li>
                        <a
                            href="/notebook"
                            class="text-xl"
                            class:active={active_tab === "notebook"}
                        >
                            <Icon icon="fxemoji:heavyplussign" class="invert" />
                            Add Course
                        </a>
                    </li>
                </ul>
            </details>
        </li>
    </ul>

    <ul class="menu menu-lg bg-base-200 rounded-box w-64">
        <li>
            <a
                href="/profile"
                class="text-2xl"
                class:active={active_tab === "profile"}
            >
                <Icon icon="fxemoji:openmouth" />
                Profile
            </a>
        </li>
        <li>
            <a href="/settings" class="text-2xl">
                <Icon icon="fxemoji:wrench" />
                Settings
            </a>
        </li>
        <li>
            <a href="/signout" class="text-2xl">
                <Icon icon="fxemoji:door" />
                Sign Out
            </a>
        </li>
    </ul>
</div>

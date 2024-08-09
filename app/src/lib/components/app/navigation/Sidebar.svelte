<script lang="ts">
    import Icon from "@iconify/svelte";
    import Flag from "../Flag.svelte";

    export let active_tab = "learn";
    export let courses;
</script>

<div
    class="flex justify-between flex-col bg-base-200 rounded-box w-64 py-2 min-h-screen"
>
    <div
        class="flex justify-between flex-col bg-base-200 rounded-box w-64 py-2 h-screen"
    >
        <ul class="menu menu-lg">
            <li>
                <a
                    href="/dashboard"
                    class="text-2xl"
                    class:active={active_tab === "dashboard"}
                >
                    <Icon icon="mage:dashboard-cross" />
                    Dashboard
                </a>
            </li>

            <li>
                <a
                    href="/learn"
                    class="text-2xl"
                    class:active={active_tab === "learn"}
                >
                    <Icon icon="mingcute:notebook-fill" />
                    Learn
                </a>
            </li>

            <li>
                <a
                    href="/notebook"
                    class="text-2xl"
                    class:active={active_tab === "notebook"}
                >
                    <Icon icon="mingcute:book-3-line" />
                    Notebooks
                </a>
            </li>

            <li>
                <details open>
                    <summary class="text-2xl">
                        <Icon icon="streamline:dictionary-language-book" />
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
                                <Icon
                                    icon="fxemoji:heavyplussign"
                                    class="invert"
                                />
                                Add Course
                            </a>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</div>

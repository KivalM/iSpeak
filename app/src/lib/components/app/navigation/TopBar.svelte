<script lang="ts">
    import Brand from "$lib/brand/Brand.svelte";
    import Flag from "$lib/components/app/Flag.svelte";
    import Icon from "@iconify/svelte";

    export let user;
    export let courses;

    let active_course = courses.find((course) => course.active);
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <Brand />
    </div>
    <div class="flex-1">
        <span class="btn btn-ghost text-xl">
            Welcome back,
            <span class="font-bold text-secondary">
                {user.name}!
            </span>
        </span>
    </div>
    <div class="flex-none">
        <details class="dropdown">
            <summary class="btn m-1 text-xl">
                <Flag language={active_course.language} />
            </summary>
            <ul
                class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
                {#each courses as course}
                    {#if !course.active}
                        <li>
                            <a href="/learn?{course.id}" class="text-lg">
                                <Flag language={course.language} />
                            </a>
                        </li>
                    {/if}
                {/each}
            </ul>
        </details>

        <div class="menu menu-horizontal">
            <a href="/settings" class="btn btn-ghost btn-circle text-xl">
                <Icon icon="mingcute:settings-5-fill" class="text-4xl" />
            </a>
            <a href="/profile" class="btn btn-ghost btn-circle text-xl">
                <Icon icon="mingcute:user-4-fill" class="text-4xl" />
            </a>
        </div>
    </div>
</div>

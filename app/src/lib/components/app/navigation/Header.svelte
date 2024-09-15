<script lang="ts">
    import Brand from "$lib/brand/Brand.svelte";
    import Icon from "@iconify/svelte";

    export let user;
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <Brand />
    </div>

    <div class="flex-1 absolute left-1/2 transform -translate-x-1/2">
        <span class="btn btn-ghost text-xl">
            Welcome back,
            <span class="font-bold text-primary">
                {user.name}!
            </span>
        </span>
    </div>

    <div class="flex-none">
        <div class="menu menu-horizontal">
            <a href="/profile" class="btn btn-ghost btn-circle text-xl">
                <Icon icon="mingcute:user-4-fill" class="text-4xl" />
            </a>
        </div>
    </div>
</div>

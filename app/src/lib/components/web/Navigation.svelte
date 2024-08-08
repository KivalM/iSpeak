<script lang="ts">
    import Icon from "@iconify/svelte";
    import Flag from "../app/Flag.svelte";
    import Brand from "$lib/brand/Brand.svelte";
</script>

<!-- <div class="container mx-auto navbar max-w-screen-xl font-sans">
    <div class="flex-1">
        <a class="text-xl font-extrabold" href="/">
            <Brand />
        </a>
    </div>
    <div class="flex-none">
        <span class="text-lg mr-2"> Choose Language: </span>
        <details class="dropdown">
            <summary class="btn btn-neutral m-1 text-xl">
                <Flag language="English" />

                <Icon icon="ci:chevron-down" class="w-6 h-6" />
            </summary>
            <ul
                class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            ></ul>
        </details>
    </div>
</div> -->

<div class="container mx-auto navbar max-w-screen-xl bg-base-200">
    <div class="navbar-start">
        <a class="btn btn-ghost text-xl" href="/"> <Brand /> </a>
    </div>
    <div class="navbar-center hidden lg:flex"></div>
    <div class="navbar-end">
        <span class="hidden md:flex text-lg mr-2"> Choose Language: </span>
        <details class="dropdown">
            <summary class="btn btn-neutral m-1 text-xl">
                <Flag language="English" />

                <Icon icon="ci:chevron-down" class="w-6 h-6" />
            </summary>
            <ul
                class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            ></ul>
        </details>
    </div>
</div>

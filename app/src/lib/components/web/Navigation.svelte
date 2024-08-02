<script lang="ts">
    import mascot from "$lib/icons/brand/mascot.png";
    import Icon from "@iconify/svelte";
    import Flag from "../app/Flag.svelte";
</script>

<div class="container mx-auto navbar max-w-screen-xl font-sans">
    <div class="flex-1">
        <a class="text-xl font-extrabold" href="/">
            <img src={mascot} alt="Languini" class="h-10 inline-block" />
            LangGuin
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
</div>

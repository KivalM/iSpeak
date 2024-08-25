<script>
    // get the current route data
    import { page } from "$app/stores";
    import Header from "$lib/components/app/navigation/Header.svelte";
    import Navigation from "$lib/components/app/navigation/Navigation.svelte";
    export let data;
</script>

<div class="flex flex-col">
    <Header user={data.profile} />
    <Navigation />

    <slot />
</div>

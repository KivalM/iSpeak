<script>
    import TopBar from "$lib/components/app/navigation/Header.svelte";
    import Navigation from "$lib/components/app/navigation/Navigation.svelte";
    export let data;
    console.log(data);
</script>

<TopBar user={data.profile} />
<Navigation />

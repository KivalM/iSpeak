<script lang="ts">
    import mascotFlag from "$lib/brand/mascot-flag.png";
    import Auth from "$lib/components/web/Auth.svelte";
    export let form;
    $: console.log("form", form);
</script>

<div class="container mx-auto max-w-screen-lg min-h-screen">
    <div class="flex flex-col lg:flex-row items-center gap-4 justify-around">
        <img src={mascotFlag} alt="Mascot Flag" class="max-w-xs" />
        <div class="menu">
            <h1 class="text-4xl font-bold text-center">Get Started</h1>
            <div class="divider"></div>
            <p class="text-lg">
                Create an account to get started with our services.
            </p>
            <Auth tab={false} {form} />
        </div>
    </div>
</div>

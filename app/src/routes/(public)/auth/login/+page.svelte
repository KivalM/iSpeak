<script lang="ts">
    import mascotFlag from "$lib/brand/mascot-flag.png";
    import Auth from "$lib/components/web/Auth.svelte";
    export let form;
</script>

<div class="container mx-auto max-w-screen-lg min-h-screen p-4">
    <div class="flex flex-col lg:flex-row items-center gap-4 justify-around">
        <div class="menu">
            <h1 class="text-4xl font-bold text-center">Jump back in</h1>
            <div class="divider"></div>
            <p class="text-lg text-center">
                Welcome back!
                <br />
                We're excited to see you again.
            </p>

            <Auth tab={true} {form} />
        </div>
        <img src={mascotFlag} alt="Mascot Flag" class="max-w-xs" />
    </div>
</div>

<script lang="ts">
    import mascotFlag from "$lib/brand/mascot-flag.png";
    import Auth from "$lib/components/web/Auth.svelte";
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="flex flex-col lg:flex-row items-center">
        <img src={mascotFlag} alt="Mascot Flag" class="max-w-xs" />
        <div class="menu">
            <h1 class="text-4xl font-bold text-center">Get Started</h1>
            <div class="divider"></div>
            <p class="text-lg">
                Create an account to get started with our services.
            </p>

            <Auth tab={false} />
        </div>
    </div>
</div>

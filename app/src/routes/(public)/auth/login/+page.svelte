<script lang="ts">
    import mascotFlag from "$lib/brand/mascot-flag.png";
    import Auth from "$lib/components/web/Auth.svelte";
</script>

<div class="container mx-auto max-w-screen-lg">
    <div class="flex flex-col lg:flex-row items-center">
        <img src={mascotFlag} alt="Mascot Flag" class="max-w-xs" />
        <div class="menu">
            <h1 class="text-4xl font-bold text-center">Jump back in</h1>
            <div class="divider"></div>
            <p class="text-lg text-center">
                Welcome back!
                <br />
                We're excited to see you again.
            </p>

            <Auth tab={true} />
        </div>
    </div>
</div>

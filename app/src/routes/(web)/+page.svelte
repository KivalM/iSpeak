<script lang="ts">
    import Navigation from "$lib/components/web/Navigation.svelte";

    import mascotFlag from "$lib/icons/brand/mascot-flag.png";
</script>

<Navigation />

<div class="hero bg-base-200 min-h-[75vh]">
    <div class="hero-content text-center flex-col lg:flex-row">
        <div class="max-w-md flex flex-col justify-between">
            <h1 class="text-4xl font-bold">
                Say Hi to <span class="text-primary text-5xl">LangGuin</span>
            </h1>
            <p class="py-6 text-xl">
                <!-- iSpeak is a platform that allows you to learn a new language
                with ease. We provide you with the tools you need to learn a new
                language in a fun and interactive way, with a focus on accuracy
                and pronunciation. -->
                <!-- a short and concise but catchy header -->
                Learn a new language with ease.
            </p>
            <div class="gap-2 menu menu-sm menu-vertical">
                <button class="btn btn-accent btn-lg">Get Started</button>
                <button class="btn btn-outline btn-lg"
                    >I already have an account</button
                >
            </div>
        </div>
        <div class="w-1/2">
            <div class="flex flex-col">
                <img
                    src={mascotFlag}
                    alt="Mascot Flag"
                    class="w-96 h-96 mx-auto"
                />
            </div>
        </div>
    </div>
</div>

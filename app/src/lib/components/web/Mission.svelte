<script lang="ts">
    import mascotFlag from "$lib/img/mission.png";
</script>

<div class="hero bg-base-200" id="mission">
    <div class="hero-content text-center flex-col lg:flex-row">
        <div class="hidden lg:flex max-w-md">
            <div class="flex flex-col">
                <img src={mascotFlag} alt="Mascot Flag" class="h-64 mx-auto" />
            </div>
        </div>
        <div class="max-w-lg flex flex-col justify-between">
            <h1 class="text-5xl font-bold">
                Our <span class="text-primary"> Mission </span>
            </h1>
            <p class="py-6 text-xl">
                Empowering language learners with interactive tools and
                real-time AI feedback to enhance pronunciation, confidence, and
                communication skills.
            </p>
        </div>
    </div>
</div>

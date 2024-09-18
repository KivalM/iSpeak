<script lang="ts">
    import mascotFlag from "$lib/img/about.png";
</script>

<div class="hero bg-base-200" id="about">
    <div class="hero-content text-center flex-col lg:flex-row">
        <div class="max-w-lg flex flex-col justify-between">
            <h1 class="text-5xl font-bold">
                About <span class="text-primary"> Us </span>
            </h1>
            <p class="py-6 text-xl">
                LangGuin is a cutting-edge language learning platform designed
                to make mastering a new language engaging and effortless. Our
                innovative tools prioritize spoken accuracy and pronunciation,
                offering real-time feedback powered by advanced AI and speech
                recognition technology. Whether you're a beginner or looking to
                refine your skills, LangGuin makes learning fun, interactive,
                and effective.
            </p>
        </div>
        <div class="hidden lg:flex max-w-md">
            <div class="flex flex-col items-center justify-center">
                <img src={mascotFlag} alt="Mascot Flag" class="h-64" />
            </div>
        </div>
    </div>
</div>

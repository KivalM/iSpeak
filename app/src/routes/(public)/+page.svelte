<script lang="ts">
    import Flag from "$lib/components/app/Flag.svelte";
    import mascotFlag from "$lib/brand/mascot-flag.png";
</script>

<div class="hero bg-base-200 min-h-[75vh]">
    <div class="hero-content text-center lg:flex-row flex-col-reverse">
        <div class="max-w-lg flex flex-col justify-between">
            <h1 class="text-4xl font-bold">
                Say Hi to <span class="text-primary text-5xl">LangGuini</span>
            </h1>
            <p class="py-6 text-xl">Learn a new language with ease.</p>
            <div class="gap-2 menu menu-sm menu-vertical">
                <a class="btn btn-accent btn-lg" href="/auth/signup"
                    >Get Started
                </a>

                <a class="btn btn-lg" href="/auth/login"
                    >I already have an account
                </a>
            </div>
        </div>

        <div class="max-w-md">
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

<div class="container mx-auto flex justify-center">
    <ul class="menu menu-xl menu-vertical lg:menu-horizontal">
        <li>
            <span class="text-3xl btn btn-ghost">
                <Flag language="English" />
            </span>
        </li>
        <li>
            <span class="text-3xl btn btn-ghost">
                <Flag language="Xhosa" />
            </span>
        </li>
        <li>
            <span class="text-3xl btn btn-ghost">
                <Flag language="French" />
            </span>
        </li>
        <li>
            <span class="text-3xl btn btn-ghost">
                <Flag language="German" />
            </span>
        </li>
        <li>
            <span class="text-3xl btn btn-ghost">
                <Flag language="Italian" />
            </span>
        </li>
        <li>
            <span class="text-3xl btn btn-ghost">
                <Flag language="Spanish" />
            </span>
        </li>
        <li>
            <span class="text-3xl btn btn-ghost">
                <Flag language="Zulu" />
            </span>
        </li>
    </ul>
</div>

<div class="divider"></div>

<div class="hero bg-base-200">
    <div class="hero-content text-center flex-col lg:flex-row">
        <div class="max-w-lg flex flex-col justify-between">
            <h1 class="text-4xl font-bold">
                LangGuin for <span class="text-primary text-5xl">Everyone</span>
            </h1>
            <p class="py-6 text-xl">
                LangGuin is a platform that allows you to learn a new language
                with ease. We provide you with the tools you need to learn a new
                language in a fun and interactive way, with a focus on accuracy
                and pronunciation.
            </p>
            <button class="btn btn-accent btn-lg">Contact Us</button>
        </div>

        <div class="hidden lg:flex max-w-md">
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
<div class="divider"></div>

<div class="hero bg-base-200">
    <div class="hero-content text-center flex-col lg:flex-row">
        <div class="hidden lg:flex max-w-md">
            <div class="flex flex-col">
                <img
                    src={mascotFlag}
                    alt="Mascot Flag"
                    class="w-96 h-96 mx-auto"
                />
            </div>
        </div>
        <div class="max-w-lg flex flex-col justify-between">
            <h1 class="text-4xl font-bold">
                LangGuin for <span class="text-primary text-5xl"
                    >Institutions</span
                >
            </h1>
            <p class="py-6 text-xl">
                LangGuin is a platform that allows you to learn a new language
                with ease. We provide you with the tools you need to learn a new
                language in a fun and interactive way, with a focus on accuracy
                and pronunciation.
            </p>
            <button class="btn btn-accent btn-lg">Contact Us</button>
        </div>
    </div>
</div>
<div class="divider"></div>

<div class="hero bg-base-200">
    <div class="hero-content text-center flex-col lg:flex-row">
        <div class="max-w-lg flex flex-col justify-between">
            <h1 class="text-4xl font-bold">
                LangGuin for <span class="text-primary text-5xl">
                    Businesses
                </span>
            </h1>
            <p class="py-6 text-xl">
                LangGuin is a platform that allows you to learn a new language
                with ease. We provide you with the tools you need to learn a new
                language in a fun and interactive way, with a focus on accuracy
                and pronunciation.
            </p>
            <button class="btn btn-accent btn-lg">Contact Us</button>
        </div>
        <div class="hidden lg:flex max-w-md">
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

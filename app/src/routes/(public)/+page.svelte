<script lang="ts">
    import Flag from "$lib/components/app/Flag.svelte";
    import mascotFlag from "$lib/brand/mascot-flag.png";
    import Pricing from "$lib/components/web/Pricing.svelte";
    import About from "$lib/components/web/About.svelte";
    import Comparison from "$lib/components/web/Comparison.svelte";
    import Mission from "$lib/components/web/Mission.svelte";
    import Team from "$lib/components/web/Team.svelte";
    import Contact from "$lib/components/web/Contact.svelte";
</script>

<div class="hero bg-base-200 min-h-[75vh]">
    <div class="hero-content text-center lg:flex-row flex-col-reverse">
        <div class="max-w-lg flex flex-col justify-between">
            <h1 class="text-4xl font-bold">
                Say Hi to <span class="text-primary text-5xl">LangGuini</span>
            </h1>
            <p class="py-6 text-xl">
                The AI-Powered language learning platform.
            </p>
            <div class="gap-2 menu menu-sm menu-vertical">
                <a class="btn btn-primary btn-lg" href="/auth/signup"
                    >Get Started
                </a>

                <a class="btn btn-md" href="/auth/login"
                    >I already have an account
                </a>
                <div class="divider">Or</div>
                <a class="btn btn-accent btn-lg" href="/demo">Try the demo </a>
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
<div class="container mx-auto flex justify-center">
    <div class="text-center text-xs text-info-content">
        At the moment we only support English but we are working on adding more.
    </div>
</div>
<div class="divider"></div>
<About />
<div class="divider"></div>
<Comparison />

<div class="divider"></div>
<Mission />

<div class="divider"></div>
<Pricing />
<div class="divider"></div>
<Team />
<div class="divider"></div>
<Contact />
<div class="divider"></div>

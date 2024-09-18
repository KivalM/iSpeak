<script lang="ts">
    import mascotFlag from "$lib/brand/mascot-flag.png";
    import Icon from "@iconify/svelte";

    let members = {
        kival: {
            name: "Akshay Maharaj",
            role: "Marketing Manager",
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            linkedin: "https://www.linkedin.com/in/kival-mahadew/",
        },
        dylan: {
            name: "Kival Mahadew",
            role: "Software Developer",
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            linkedin: "https://www.linkedin.com/in/kival-mahadew/",
        },
        akshay: {
            name: "Dylan Govender",
            role: "Brand Manager",
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            linkedin: "https://www.linkedin.com/in/kival-mahadew/",
        },
    };
</script>

<div class="hero bg-base-200" id="team">
    <div class="hero-content text-center flex-col lg:flex-row">
        <div class="max-w-2xl flex flex-col justify-between gap-2 mb-5">
            <h1 class="text-5xl font-bold">
                The <span class="text-primary"> Team </span>
            </h1>
            <p class="py-6 text-xl">
                Meet the team behind LangGuin, a group of passionate individuals
                dedicated to making language learning fun, interactive, and
                effective.
            </p>
            <div class="flex flex-row gap-4 items-center justify-center">
                {#each Object.keys(members) as member}
                    <div
                        class="card card-compact bg-base-100 w-52 shadow-xl p-2"
                    >
                        <figure>
                            <div class="avatar">
                                <div class="mask mask-squircle w-24">
                                    <img
                                        src={members[member].image}
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title text-center justify-center">
                                {members[member].name}
                            </h2>
                            <p class="text-center text-md text-primary">
                                {members[member].role}
                            </p>
                            <div class="card-actions justify-center">
                                <a
                                    href={members[member].linkedin}
                                    class="btn btn-ghost"
                                >
                                    <Icon
                                        icon="akar-icons:linkedin-fill"
                                        class="text-3xl text-primary"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

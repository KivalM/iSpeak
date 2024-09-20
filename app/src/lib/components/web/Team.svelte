<script lang="ts">
    import kival from "$lib/img/kival.jpg";
    import dylan from "$lib/img/dylan.jpg";
    import akshay from "$lib/img/akshay.jpg";
    import Icon from "@iconify/svelte";

    let members = {
        kival: {
            name: "Akshay Maharaj",
            role: "Business Analyst",
            image: akshay,
            linkedin: "https://www.linkedin.com/in/akshay-maharaj-205048287/",
        },
        dylan: {
            name: "Kival Mahadew",
            role: "Software Developer/ ML Engineer",
            image: kival,
            linkedin: "https://www.linkedin.com/in/kivalm/",
        },
        akshay: {
            name: "Dylan Govender",
            role: "Brand and Marketing",
            image: dylan,
            linkedin: "https://www.linkedin.com/in/dyla/",
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

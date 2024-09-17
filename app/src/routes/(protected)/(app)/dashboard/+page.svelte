<script lang="ts">
    import Continue from "$lib/components/app/dashboard/Continue.svelte";
    import Stats from "$lib/components/app/dashboard/Stats.svelte";
    import LessonCard from "$lib/components/app/lessons/LessonCard.svelte";
    import type { Tables } from "$lib/data/db/database.types";
    import Icon from "@iconify/svelte";
    import { round } from "@xenova/transformers";

    export let data;
    console.log(data);
</script>

<div class="container mx-auto max-w-screen-lg">
    <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
    >
        {#if !data.uniqueWords == 0}
            <div
                class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 col-span-4"
            >
                <Stats value={data.uniqueDayCount} name="Days Learning" />
                <Stats value={data.uniqueWords} name="Unique Words Learned" />
                <Stats value={round(data.avgScore, 2)} name="Average Score" />
                <Stats value={data.bestWord.word} name="Best Word" />
            </div>

            {#if data.latestLesson}
                <div class="col-span-2">
                    <h3 class="text-xl font-bold text-center">
                        Continue Learning
                    </h3>
                    <LessonCard lesson={data.latestLesson} hideDelete={true} />
                </div>
            {/if}

            <div class="col-span-2">
                <h3 class="text-xl font-bold text-center text-transparent">
                    You're doing great!
                </h3>
                <div class="card glass w-full p-2">
                    <div
                        class="card-body flex flex-col items-center justify-center"
                    >
                        <span class="text-center text-primary text-2xl">
                            You're doing great!
                        </span>
                        <Icon
                            icon="akar-icons:star"
                            class="text-5xl text-yellow-500"
                        />
                        <span class="text-center">
                            Complete more lessons to see your progress here.
                        </span>
                    </div>
                </div>
            </div>
        {/if}

        {#if data.uniqueWords == 0}
            <div class="col-span-4">
                <div class="card glass w-full p-2">
                    <div
                        class="card-body flex flex-col items-center justify-center"
                    >
                        <span class="text-center text-primary text-2xl">
                            Welcome to LangGuin!
                        </span>
                        <Icon
                            icon="akar-icons:star"
                            class="text-5xl text-yellow-500"
                        />
                        <span class="text-center">
                            Head to the lessons page to start learning new
                            words. Good luck!
                        </span>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

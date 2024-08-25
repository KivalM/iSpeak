<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div>
    <h1 class="text-4xl font-bold text-center p-2">Notebooks</h1>
    <h2 class="text-xl font-bold text-center p-2">
        Recap of your learning journey
    </h2>

    <div class="flex flex-col gap-2 p-2">
        <div class="divider text-2xl">Greetings</div>
        <div class="text-xl text-center">
            Learning various ways to greet people
        </div>

        <div class="grid grid-cols-2">
            <span>Word</span>
            <span>Play</span>
            <div class="divider"></div>
            <div class="divider"></div>

            <span>Hello</span>

            <span>
                <button class="btn btn-primary">
                    <Icon icon="mdi:play" class="mr-2 text-xl" />
                    Play
                </button>
            </span>
            <span>Good Morning</span>
            <span>
                <button class="btn btn-primary">
                    <Icon icon="mdi:play" class="mr-2 text-xl" />
                    Play
                </button>
            </span>

            <span>Good Afternoon</span>
            <span>
                <button class="btn btn-primary">
                    <Icon icon="mdi:play" class="mr-2 text-xl" />
                    Play
                </button>
            </span>
        </div>

        <div class="divider text-2xl">Numbers</div>
        <div class="text-xl text-center">Learning Numbers in English</div>

        <div class="grid grid-cols-2">
            <span>Word</span>
            <span>Play</span>
            <div class="divider"></div>
            <div class="divider"></div>

            <span>One</span>

            <span>
                <button class="btn btn-primary">
                    <Icon icon="mdi:play" class="mr-2 text-xl" />
                    Play
                </button>
            </span>
            <span>Two</span>
            <span>
                <button class="btn btn-primary">
                    <Icon icon="mdi:play" class="mr-2 text-xl" />
                    Play
                </button>
            </span>

            <span>Three</span>
            <span>
                <button class="btn btn-primary">
                    <Icon icon="mdi:play" class="mr-2 text-xl" />
                    Play
                </button>
            </span>

            <span>Four</span>
            <span>
                <button class="btn btn-primary">
                    <Icon icon="mdi:play" class="mr-2 text-xl" />
                    Play
                </button>
            </span>
        </div>

        <!-- generate a lesson -->
        <div class="divider"></div>
        <button class="btn btn-primary">
            <Icon icon="akar-icons:plus" class="mr-2 text-xl" />
            Do more courses to expand your notebook</button
        >
    </div>
</div>

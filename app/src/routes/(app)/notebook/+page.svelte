<script lang="ts">
    import RoadMap from "$lib/components/app/navigation/RoadMap.svelte";
    import Icon from "@iconify/svelte";

    export let data;
</script>

<h1 class="text-4xl font-bold text-center p-2">Notebooks</h1>
<h2 class="text-xl font-bold text-center p-2">
    Recap of your learning journey
</h2>

<div class="flex flex-col gap-2 p-2">
    <div class="divider text-2xl">Greetings</div>
    <div class="text-xl text-center">Learning various ways to greet people</div>

    <!-- table with sample words and a play button -->
    <div class="divider"></div>
    <!-- table -->
    <table class="table w-full text-2xl">
        <thead>
            <tr>
                <th>Word</th>
                <th>Play</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Hello</td>
                <td>
                    <button class="btn btn-primary">
                        <Icon icon="mdi:play" class="mr-2 text-xl" />
                        Play
                    </button>
                </td>
            </tr>
            <tr>
                <td>Goodbye</td>
                <td>
                    <button class="btn btn-primary">
                        <Icon icon="mdi:play" class="mr-2 text-xl" />
                        Play
                    </button>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="divider text-2xl">Numbers</div>
    <div class="text-xl text-center">Learning numbers in English</div>

    <table class="table w-full text-2xl">
        <thead>
            <tr>
                <th>Word</th>
                <th>Play</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>One</td>
                <td>
                    <button class="btn btn-primary">
                        <Icon icon="mdi:play" class="mr-2 text-xl" />
                        Play
                    </button>
                </td>
            </tr>
            <tr>
                <td>Two</td>
                <td>
                    <button class="btn btn-primary">
                        <Icon icon="mdi:play" class="mr-2 text-xl" />
                        Play
                    </button>
                </td>
            </tr>
            <tr>
                <td>Three</td>
                <td>
                    <button class="btn btn-primary">
                        <Icon icon="mdi:play" class="mr-2 text-xl" />
                        Play
                    </button>
                </td>
            </tr></tbody
        >
    </table>

    <!-- generate a lesson -->
    <div class="divider"></div>
    <button class="btn btn-primary">
        <Icon icon="akar-icons:plus" class="mr-2 text-xl" />
        Do more courses to expand your notebook</button
    >
</div>

<script lang="ts">
    import Bar from "../../../lib/components/app/learn/Bar.svelte";

    export let data;
    console.log(data);
</script>

<Bar
    name={data.lesson.name}
    description={data.lesson.description}
    progress={0}
    max_progress={10}
/>

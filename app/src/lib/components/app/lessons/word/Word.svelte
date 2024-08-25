<script lang="ts">
    export let word: string;
    export let meaning: string = "loading...";
</script>

<div
    class="text-4xl cursor-pointer hover:text-secondary transition-colors duration-200 tooltip tooltip-bottom"
    data-tip={meaning}
>
    {word}
</div>

<script lang="ts">
    import { applyAction, deserialize } from "$app/forms";
    import Bar from "$lib/components/app/learn/Bar.svelte";
    import Test from "$lib/components/app/lessons/word/Test.svelte";
    import type { ActionResult } from "@sveltejs/kit";

    export let data;
    export let form;
    $: console.log("data", data);
    $: console.log("form", form);
    async function submitForm(e: CustomEvent) {
        let blob = e.detail.blob;
        console.log("blob", blob);
        const formData = new FormData();
        formData.append("audio", blob, "audio.ogg");
        formData.append("word", data.word);
        const response = await fetch("", {
            method: "POST",
            body: formData,
            headers: {
                "x-sveltekit-action": "true",
            },
        });
        const result: ActionResult = deserialize(await response.text());
        console.log("result", result);
        applyAction(result);
    }
</script>

<Bar
    name={data.name}
    description={data.description}
    progress={data.idx}
    max_progress={data.max}
></Bar>

<div class="card flex flex-col items-center">
    <form class="flex items-center justify-center">
        <Test phrase={data.word} on:done={submitForm} feedback={form}></Test>
    </form>
    <div>
        {#if data.prev !== null}
            <a
                data-sveltekit-replacestate
                href="/lessons/{data.lesson?.id}?idx={data.prev}">Previous</a
            >
        {/if}
        {#if data.next}
            <a
                data-sveltekit-replacestate
                href="/lessons/{data.lesson?.id}?idx={data.next}">Next</a
            >
        {:else}
            <a href="/lessons">Finish</a>
        {/if}
    </div>
</div>

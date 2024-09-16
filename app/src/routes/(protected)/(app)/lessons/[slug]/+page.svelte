<script lang="ts">
    import { applyAction, deserialize } from "$app/forms";
    import Bar from "$lib/components/app/lessons/Bar.svelte";
    import Test from "$lib/components/app/lessons/word/Test.svelte";
    import Icon from "@iconify/svelte";
    import type { ActionResult } from "@sveltejs/kit";

    export let data;
    export let form;

    let processing = false;
    async function submitForm(e: CustomEvent) {
        if (processing) return;
        processing = true;
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
        applyAction(result);
        processing = false;
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
        <Test
            phrase={data.word}
            on:done={submitForm}
            feedback={form}
            {processing}
        ></Test>
    </form>
</div>

<div class="flex justify-between container mx-auto">
    {#if data.prev !== null}
        <a
            data-sveltekit-replacestate
            href="/lessons/{data.lesson?.id}?idx={data.prev}"
            class="btn btn-primary"
        >
            <Icon icon="mdi:arrow-left" width="1rem" height="1rem" />
            Previous</a
        >
    {:else}
        <span></span>
    {/if}

    {#if data.next}
        <a
            data-sveltekit-replacestate
            class="btn btn-primary"
            href="/lessons/{data.lesson?.id}?idx={data.next}"
            >Next
            <Icon icon="mdi:arrow-right" width="1rem" height="1rem" />
        </a>
    {:else}
        <form method="POST" action="/lessons/?/finish">
            <input type="hidden" name="lesson_id" value={data.lesson?.id} />
            <button class="btn btn-primary" type="submit">
                Finish
                <Icon icon="mdi:check" width="1rem" height="1rem" />
            </button>
        </form>
    {/if}
</div>

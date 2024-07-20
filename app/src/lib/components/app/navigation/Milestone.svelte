<script lang="ts">
    import Icon from "@iconify/svelte";

    export let milestone;
    export let selected = false;
</script>

<button
    class="btn rounded-full w-16 h-16 relative"
    class:bg-accent={selected}
    on:focus={() => (selected = true)}
>
    <div class:opacity-50={!milestone.completed} class="text-4xl">
        <Icon icon="fxemoji:star" />
    </div>

    {#if selected}
        <div
            class="absolute chat chat-start left-0 translate-x-[50px] top-0 translate-y-[-40px] w-80"
        >
            <div class="chat-bubble">
                <div class="text-lg">{milestone.title}</div>
                <div class="text-base">{milestone.description}</div>

                <a class="btn btn-primary" href="/lesson/{milestone.id}"
                    >Start</a
                >
            </div>
        </div>
    {/if}
</button>

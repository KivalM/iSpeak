<script lang="ts">
    import Icon from "@iconify/svelte";

    export let language:
        | "English"
        | "Spanish"
        | "French"
        | "German"
        | "Zulu"
        | "Xhosa"
        | "Italian" = "English";

    // emoji mappings
    const flag_emojis: { [key: string]: string } = {
        English: "fxemoji:greatbritainflag",
        Spanish: "fxemoji:spanishflag",
        French: "fxemoji:franceflag",
        Italian: "fxemoji:italianflag",
        German: "fxemoji:germanyflag",
    };

    let flag = flag_emojis[language];
</script>

<span class="flex items-center gap-3">
    <Icon icon={flag} />
    {language}
</span>

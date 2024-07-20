<script lang="ts">
    import Icon from "@iconify/svelte";

    export let language:
        | "English"
        | "Spanish"
        | "French"
        | "German"
        | "Italian" = "English";

    // emoji mappings
    const flag_emojis = {
        English: "fxemoji:greatbritainflag",
        Spanish: "fxemoji:spanishflag",
        French: "fxemoji:franceflag",
        Italian: "fxemoji:italianflag",
    };

    let flag = flag_emojis[language];
</script>

<Icon icon={flag} />
{language}

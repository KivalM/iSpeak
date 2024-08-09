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
        Xhosa: "circle-flags:za",
        Zulu: "circle-flags:za",
        English: "circle-flags:gb",
        Spanish: "circle-flags:es",
        French: "circle-flags:fr",
        Italian: "circle-flags:it",
        German: "circle-flags:de",
    };

    let flag = flag_emojis[language];
</script>

<span class="flex items-center gap-3">
    <Icon icon={flag} />
    {language}
</span>

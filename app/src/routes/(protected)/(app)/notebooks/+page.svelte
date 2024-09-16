<script lang="ts">
    import Icon from "@iconify/svelte";
    import { round } from "@xenova/transformers";

    export let data;
    console.log(data);
</script>

<section class="container mx-auto max-w-screen-lg">
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th></th>
                    <th>Word</th>
                    <th>Average Performance</th>
                    <th>Best Performance</th>
                    <th>AI Notes</th>
                </tr>
            </thead>

            <tbody>
                {#each data.results as result, i}
                    <tr class="hover">
                        <th>{i + 1}</th>
                        <td>{result.word}</td>
                        <td>{round(result.avg, 2)}</td>
                        <td>{round(result.max, 2)}</td>

                        <!-- <td>{word.ai_notes}</td> -->
                        {#if result.max === result.avg}
                            <td></td>
                        {:else if result.max == 1}
                            <td> Looks like you've mastered this word! </td>
                        {:else if result.max == 0}
                            <td>
                                Looks like you're struggling with this word!
                            </td>
                        {:else if result.max > result.avg}
                            <td>
                                Looks like you're improving with this word!
                            </td>
                        {:else}
                            <td>
                                Looks like you're struggling with this word!
                            </td>
                        {/if}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

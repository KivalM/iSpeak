<script lang="ts">
    import type { Tables } from "$lib/data/db/database.types";

    export let stats = {
        words_learned: 100,
        completed_lessons: 10,
        total_lessons: 20,
        days_streak: 5,
        longest_streak: 10,
    };
</script>

<section>
    <div class="divider divider-primary card-title">Stats</div>

    <div class="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-6">
        <!-- words learned card -->
        <div class="card glass">
            <div class="card-body">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="card-title">Words Learned</div>
                        <div class="text-4xl">{stats.words_learned}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- completed lessons card -->
        <div class="card glass">
            <div class="card-body">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="card-title">Words Learned</div>
                        <div class="text-4xl">{stats.words_learned}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card glass">
            <div class="card-body">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="card-title">Words Learned</div>
                        <div class="text-4xl">{stats.words_learned}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card glass">
            <div class="card-body">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="card-title">Words Learned</div>
                        <div class="text-4xl">{stats.words_learned}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card glass">
            <div class="card-body">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="card-title">Words Learned</div>
                        <div class="text-4xl">{stats.words_learned}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card glass">
            <div class="card-body">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="card-title">Words Learned</div>
                        <div class="text-4xl">{stats.words_learned}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

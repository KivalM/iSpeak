<script lang="ts">
    export let name: string;
    export let value: any;
</script>

<div class="card glass">
    <div class="card-body">
        <div class="flex items-center justify-between">
            <div>
                <div class="card-title">{name}</div>
                <div class="text-2xl font-bold">{value}</div>
            </div>
        </div>
    </div>
</div>

<script lang="ts">
    export let error;
</script>

<div>
    <h1>Error: {error.status}</h1>
    <p>{error.message}</p>
    <pre>{JSON.stringify(error, null, 2)}</pre>
</div>

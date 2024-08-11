<script lang="ts">
    export let data;
    console.log(data);
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start"></div>
    <div class="navbar-center">
        <div class="btn btn-ghost text-xl">{data.lesson?.name}</div>
    </div>
    <div class="navbar-end"></div>
</div>

<slot></slot>

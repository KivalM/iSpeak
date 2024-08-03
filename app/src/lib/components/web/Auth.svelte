<script lang="ts">
    import Icon from "@iconify/svelte";

    export let tab = false;
</script>

<form method="POST" action="/auth/?/login" class="flex flex-col gap-4 max-w-md">
    <label class="input input-bordered flex items-center gap-2 input-primary">
        <Icon icon="lucide:mail" class="w-6 h-6" />

        <input type="text" class="grow" placeholder="Email" name="email" />
    </label>
    <label class="input input-bordered flex items-center gap-2 input-primary">
        <Icon icon="mdi:password-outline" class="w-6 h-6" />

        <input
            type="password"
            class="grow"
            placeholder="Password"
            name="password"
        />
    </label>

    <button class="btn btn-success">Login</button>
    <div class="divider">Or</div>
    <button formaction="/auth/?/signup" class="btn btn-secondary"
        >Sign up</button
    >
</form>

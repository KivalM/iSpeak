<script lang="ts">
    import Icon from "@iconify/svelte";
    import Flag from "../app/Flag.svelte";

    export let tab = false;
</script>

<form method="POST" action="/auth/?/login" class="flex flex-col gap-4 max-w-md">
    <label class="input input-bordered flex items-center gap-2 input-primary">
        <Icon icon="lucide:mail" class="w-6 h-6" />

        <input type="text" class="grow" placeholder="Email" name="email" />
    </label>

    {#if !tab}
        <label
            class="input input-bordered flex items-center gap-2 input-primary"
        >
            <Icon icon="lucide:user" class="w-6 h-6" />

            <input
                type="text"
                class="grow"
                placeholder="Username"
                name="username"
            />
        </label>

        <label
            class="input input-bordered flex items-center gap-2 input-primary"
        >
            <Icon icon="lucide:user" class="w-6 h-6" />

            <input
                type="text"
                class="grow"
                placeholder="Full Name"
                name="name"
            />
        </label>
    {/if}

    <label class="input input-bordered flex items-center gap-2 input-primary">
        <Icon icon="mdi:password-outline" class="w-6 h-6" />

        <input
            type="password"
            class="grow"
            placeholder="Password"
            name="password"
        />
    </label>

    {#if tab}
        <!-- remember -->
        <label class="flex items-center gap-2">
            <input type="checkbox" class="checkbox" />
            <span>Remember me</span>
        </label>
        <button class="btn btn-success">Login</button>
    {:else}
        <label
            class="input input-bordered flex items-center gap-2 input-primary"
        >
            <Icon icon="mdi:password-outline" class="w-6 h-6" />

            <input
                type="password"
                class="grow"
                placeholder="Confirm password"
                name="password2"
            />
        </label>

        <details class="dropdown w-full">
            <summary class="btn btn-outline m-1 text-xl w-full">
                <Flag language="English" />

                <Icon icon="ci:chevron-down" class="w-6 h-6" />
            </summary>
            <ul
                class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            ></ul>
        </details>

        <button formaction="/auth/?/signup" class="btn btn-primary"
            >Sign up</button
        >
    {/if}
</form>

<!-- asds -->

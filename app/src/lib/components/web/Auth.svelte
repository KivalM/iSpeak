<script lang="ts">
    import Icon from "@iconify/svelte";
    import Flag from "../app/Flag.svelte";

    export let tab = false;
    export let form = null;
    $: console.log("form", form);
</script>

<form method="POST" action="/auth/login" class="flex flex-col gap-4 max-w-md">
    {#if form && form.message}
        <div class="alert alert-error">{form.message}</div>
    {/if}

    <label class="input input-bordered flex items-center gap-2 input-primary">
        <Icon icon="lucide:mail" class="w-6 h-6" />
        <input type="text" class="grow" placeholder="Email" name="email" />
        {#if form && form.email}
            <div class="text-error">
                {form.email}
                {#if form.missing}is required{:else}
                    is invalid{/if}
            </div>
        {/if}
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
            {#if form && form.username}
                <div class="text-error">
                    {form.username}
                    {#if form.missing}is required{:else}
                        is invalid{/if}
                </div>
            {/if}
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
            {#if form && form.name}
                <div class="text-error">
                    {form.name}
                    {#if form.missing}is required{:else}
                        is invalid{/if}
                </div>
            {/if}
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
        {#if form && form.password}
            <div class="text-error">
                {form.password}
                {#if form.missing}is required{:else}
                    is invalid{/if}
            </div>
        {/if}
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

        <!-- <details class="dropdown w-full">
            <summary class="btn btn-outline m-1 text-xl w-full">
                <Flag language="English" />

                <Icon icon="ci:chevron-down" class="w-6 h-6" />
            </summary>
            <ul
                class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            ></ul>
        </details> -->

        <button formaction="/auth/signup" class="btn btn-primary"
            >Sign up</button
        >
    {/if}

    {#if !tab}
        <!-- sign in instead -->
        <div class="text-center">
            <a href="/auth/login" class="link">
                Already have an account? Sign in
            </a>
        </div>
    {:else}
        <!-- sign up instead -->
        <div class="text-center">
            <a href="/auth/signup" class="link">
                Don't have an account? Sign up
            </a>
        </div>
    {/if}
</form>

<!-- asds -->

<script lang="ts">
    import Icon from "@iconify/svelte";

    export let tab = false;
    export let form = null;
    $: console.log("form", form);
</script>

<form method="POST" action="/auth/login" class="flex flex-col gap-4 max-w-md">
    {#if form && form.error}
        <div class="alert alert-error">
            {form.error}
            {#if form.error == "Database error saving new user"}
                Try a different username.
            {/if}
        </div>
    {/if}

    <label class="input input-bordered flex items-center gap-2 input-primary">
        <Icon icon="lucide:mail" class="w-6 h-6" />
        <input
            type="text"
            class="grow"
            placeholder="Email"
            name="email"
            value={form ? form.email.value : ""}
        />
        {#if form && form.email.error !== null}
            <div class="text-error text-sm">
                {form.email.error}
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
                value={form ? form.username.value : ""}
            />
            {#if form && form.username.error !== null}
                <div class="text-error text-sm">
                    {form.username.error}
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
                value={form ? form.name.value : ""}
            />
            {#if form && form.name.error !== null}
                <div class="text-error text-sm">
                    {form.name.error}
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
            value={form ? form.password.value : ""}
        />
        {#if form && form.password.error !== null}
            <div class="text-error text-sm">
                {form.password.error}
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

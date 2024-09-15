<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Tables } from "$lib/data/db/database.types.js";

    export let data;
    let profile: Tables<"profiles"> = data.profile!;

    $: ({ supabase } = data);

    $: logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
        goto("/");
    };
</script>

<div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-center p-2">Profile</h1>
    <form class="menu menu-vertical max-w-lg mx-auto">
        <label class="input input-bordered flex items-center gap-2">
            Username:
            <input
                type="text"
                class="grow"
                placeholder="daisy@site.com"
                value={profile.username}
            />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Name:
            <input
                type="text"
                class="grow"
                placeholder="Daisy"
                value={profile.name}
            />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Email:
            <input
                type="text"
                class="grow"
                placeholder="daisy@site.com"
                value={profile.email}
            />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Bio:
            <input
                type="text"
                class="grow"
                placeholder="I am a teacher"
                value={profile.bio}
            />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Language:
            <input
                type="text"
                class="grow"
                placeholder="I am a teacher"
                value={profile.language}
            />
        </label>
    </form>
    <div class="flex justify-between max-w-lg mx-auto">
        <button class="btn btn-primary" disabled>Save</button>
        <button class="btn btn-error" on:click={logout}>Logout</button>
    </div>
</div>

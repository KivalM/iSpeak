<script lang="ts">
    export let data;
    $: ({ supabase } = data);

    $: logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };
</script>

<slot />

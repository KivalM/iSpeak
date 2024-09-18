<script lang="ts">
    import Brand from "$lib/brand/Brand.svelte";
</script>

<div class="container mx-auto navbar bg-base-200">
    <div class="navbar-start">
        <a class="btn btn-ghost text-xl" href="/"> <Brand /> </a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal">
            <li>
                <a href="/#about" class="btn btn-ghost text-xl"> About Us </a>
            </li>
            <li>
                <a href="/#mission" class="btn btn-ghost text-xl">
                    Our Mission
                </a>
            </li>
            <li>
                <a href="/#pricing" class="btn btn-ghost text-xl"> Pricing </a>
            </li>
            <li>
                <a href="/#team" class="btn btn-ghost text-xl"> Team </a>
            </li>
            <li>
                <a href="/#contact" class="btn btn-ghost text-xl"> Contact </a>
            </li>
        </ul>
    </div>
    <div class="navbar-end">
        <a href="/auth/signup" class="btn btn-ghost text-xl"> Sign In </a>
    </div>
</div>

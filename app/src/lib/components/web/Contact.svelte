<script lang="ts">
    import contact from "$lib/img/contact.png";

    import Icon from "@iconify/svelte";
</script>

<div class="container mx-auto" id="contact">
    <div class=" flex flex-row justify-center gap-4">
        <div class="w-96 flex flex-col">
            <h1 class="text-5xl font-bold text-center">
                Get in <span class="text-primary"> Touch </span>
            </h1>

            <!-- img -->
            <img src={contact} alt="Contact" class="w-96 mx-auto" />

            <!-- links -->
            <div class="flex gap-4 justify-center p-4">
                <a href="#">
                    <Icon
                        icon="akar-icons:facebook-fill"
                        class="text-4xl text-primary"
                    />
                </a>
                <a href="#">
                    <Icon
                        icon="akar-icons:twitter-fill"
                        class="text-4xl text-primary"
                    />
                </a>
                <a href="#">
                    <Icon
                        icon="akar-icons:instagram-fill"
                        class="text-4xl text-primary"
                    />
                </a>
                <a href="#">
                    <Icon
                        icon="akar-icons:linkedin-fill"
                        class="text-4xl text-primary"
                    />
                </a>
            </div>
        </div>
        <div class="divider-horizontal"></div>
        <form class="form-control flex flex-col gap-4 w-96">
            <label class="input input-bordered flex items-center gap-2">
                Name
                <input type="text" class="grow" placeholder="Your Name" />
            </label>

            <label class="input input-bordered flex items-center gap-2">
                Email
                <input type="text" class="grow" placeholder="Your@email.com" />
            </label>

            <textarea
                class="textarea textarea-bordered grow"
                placeholder="Message"
            ></textarea>
            <button class="btn btn-primary">Send</button>
        </form>
    </div>
</div>

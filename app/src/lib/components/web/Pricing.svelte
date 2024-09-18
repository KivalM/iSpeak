<script lang="ts">
    import mascotFlag from "$lib/brand/mascot-flag.png";
    import indiv from "$lib/img/individual.png";
    import inst from "$lib/img/institutions.png";
    import prem from "$lib/img/premium.png";
    import Icon from "@iconify/svelte";
</script>

<div class="container mx-auto" id="pricing">
    <h1 class="text-5xl font-bold text-center">Pricing</h1>
    <p class="text-center py-6 text-xl max-w-5xl mx-auto">
        We offer a range of plans to suit your needs. Whether you're a first
        time learner, an enthusiastic parent, or a dedicated teacher, or even a
        company, we have a plan for you.
    </p>
    <div class="divider w-1/2 mx-auto"></div>
    <div class="flex justify-center gap-4">
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={indiv} alt="Shoes" class="p-6" />
            </figure>
            <div class="card-body">
                <h2 class="card-title flex justify-between">
                    <span>Free Plan</span>
                    <span class="text-xs text-primary">Limited</span>
                </h2>
                <p>Get started with our free plan</p>
                <ul class="space-y-2">
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        AI-Powered pronunciation feedback
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        1 Free Personalized Lesson per day
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Limited use of AI-Powered tools
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Access to all languages
                    </li>
                </ul>
                <div class="card-actions justify-end">
                    <a class="btn btn-outline" href="/auth/signup">Free</a>
                </div>
            </div>
        </div>
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={prem} alt="Shoes" class="p-5" />
            </figure>
            <div class="card-body">
                <h2 class="card-title flex justify-between">
                    <span>Premium Plan</span>
                    <span class="text-xs text-primary">Recommended</span>
                </h2>
                <p>Get more out of your learning experience</p>
                <ul class="space-y-2">
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        AI-Powered pronunciation feedback
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Unlimited Personalized Lessons per day
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Full use of AI-Powered tools
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Access to all languages
                    </li>
                </ul>
                <div class="card-actions justify-end">
                    <a class="btn btn-outline" href="/auth/signup">$9.99/mo</a>
                </div>
            </div>
        </div>
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={inst} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title flex justify-between">
                    <span>Institution Plan</span>
                    <span class="text-xs text-primary"
                        >Best for Institutions</span
                    >
                </h2>
                <p>Get discounted pricing for institutions</p>
                <ul class="space-y-2">
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Discounted pricing for institutions
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Unlimited Personalized Lessons per day
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Full use of AI-Powered tools
                    </li>
                    <li class="flex items-center gap-3">
                        <Icon icon="akar-icons:check" class="text-primary" />
                        Access to all languages
                    </li>
                </ul>
                <div class="card-actions justify-end">
                    <a class="btn btn-outline" href="#contact">Contact Us </a>
                </div>
            </div>
        </div>
    </div>
</div>

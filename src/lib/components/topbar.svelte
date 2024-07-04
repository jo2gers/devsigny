<script>
    import { selectedtheme } from "../stores/themestore";

    let themes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset"
    ];

    function changetheme(theme) {
        $selectedtheme = theme;
    }
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <details class="dropdown">
            <summary class="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    />
                </svg>
            </summary>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1"
            >
                {#each themes as theme}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li class="bg-base-100 rounded-box">
                        <a
                            class="capitalize text-xl font-semibold"
                            on:click={() => changetheme(theme)}>{theme}</a
                        >
                    </li>
                {/each}
            </ul>
        </details>
    </div>
    <div class="navbar-center">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="text-3xl font-bold">Thank You</a>
    </div>
    <div class="navbar-end">
        <button class="btn btn-ghost btn-circle w-32 text-xl font-bold">
            Contact Us
        </button>
    </div>
</div>


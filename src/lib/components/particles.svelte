<script>
    import { onMount } from "svelte";
    //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
    import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
    import { selectedtheme } from "../stores/themestore";
    import Themescolors from "daisyui/src/theming/themes.js";

    let ParticlesComponent;

    onMount(async () => {
        const module = await import("svelte-particles");
        console.log(Themescolors);
        ParticlesComponent = module.default;
    });

    $: particlesConfig.background.color =
        Themescolors[$selectedtheme]["base-200"];

    $: particlesConfig.particles.color.value =
        Themescolors[$selectedtheme]["base-content"];

    $: particlesConfig.particles.links.color =
        Themescolors[$selectedtheme]["base-content"];

    let particlesConfig = {
        fullScreen: {
            enable: true,
            zIndex: 0,
        },
        background: {
            color: Themescolors[$selectedtheme]["base-200"],
        },
        interactivity: {
            detect_on: "window",
            events: {
                onclick: { enable: true, mode: "repulse" },
                onhover: {
                    enable: true,
                    mode: "grab",
                    parallax: { enable: false, force: 60, smooth: 10 },
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 300,
                    duration: 6,
                    factor: 100,
                    speed: 0.5,
                    maxSpeed: 10,
                    easing: "ease-in",
                },
                grab: {
                    distance: 300
                },
            },
        },
        particles: {
            color: {
                value: Themescolors[$selectedtheme]["base-content"],
            },
            links: {
                enable: true,
                color: Themescolors[$selectedtheme]["base-content"],
                opacity: 0.4,
                distance: 150,
            },
            move: {
                enable: true,
            },
            number: {
                value: 400,
            },
        },
    };

    let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async (engine) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(main);
        await loadSlim(engine);
    };
</script>

<svelte:component
    this={ParticlesComponent}
    id="tsparticles"
    class="foo bar"
    style=""
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    {particlesInit}
/>

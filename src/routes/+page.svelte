<script>
    import { selectedtheme } from "../lib/stores/themestore";
    import { fly } from "svelte/transition";
    import Carousel from "../lib/components/carousel.svelte";
    let devs = false;
    let igny = false;
</script>

<div class="grid grid-cols-7 flex-1 ">
    <div class="flex items-center justify-end col-span-2">
        {#if devs}
            <div class="bg-base-100 w-[90%] h-[60%] rounded-box -mr-[20%] text-base-content p-3 flex flex-col" transition:fly={{ x: "-50%" }}>
                <h1 class="self-center text-5xl mb-5 font-bold">This is what we do</h1>
                <Carousel/>
            </div>
        {/if}
    </div>

    <div class="flex flex-1 justify-center items-center col-span-3">
        <div
            class="flex w-max self-center bg-base-300 text-[10vh] font-black rounded-box overflow-hidden"
        >
            <div
                class="{devs?"bg-primary text-primary-content":""} flex flex-1 hover:bg-primary hover:text-primary-content justify-end items-center pl-10"
            >
                <button on:click={() => (devs = !devs)}> DEVS </button>
            </div>
            <div
                class="{igny?"bg-secondary text-secondary-content":""} hover:bg-secondary flex flex-1 justify-start items-center pr-10"
            >
                <button on:click={() => (igny = !igny)}> IGNY </button>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-start col-span-2">
        {#if igny}
            <div class="bg-secondary w-[80%] h-[60%] rounded-box -ml-[20%] text-secondary-content" transition:fly={{ x: "50%" }}>
                Bla bla
            </div>
        {/if}
    </div>
</div>

<script>
  import Topbar from "../lib/components/topbar.svelte";
  import Particles from "../lib/components/particles.svelte";
  import "../app.css";
  import { selectedtheme } from "../lib/stores/themestore";
</script>

<div
  data-theme={$selectedtheme}
  class="relative h-screen w-screen flex flex-col bg-transparent select-none"
>
  <div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-100">
    <div class="absolute inset-0">
      <Particles />
    </div>
  </div>
  <Topbar />
  <slot />
</div>

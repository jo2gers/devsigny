<script>
    import Topbar from "../lib/components/topbar.svelte";
    import "../app.css";
    import {selectedtheme} from "../lib/stores/themestore"
  </script>
  
<div data-theme={$selectedtheme} class="h-screen w-screen flex flex-col">
    <Topbar />
    <slot />

</div>

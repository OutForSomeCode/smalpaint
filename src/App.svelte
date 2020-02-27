<script>
    import {onMount} from 'svelte';

    let m = {x: 0, y: 0};
    let scz = {x: 0, y: 0};

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    onMount(async () => {
        scz.x = document.getElementById("screen").offsetWidth;
        scz.y = document.getElementById("screen").offsetHeight;
    });

    function addShape(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<style>
    div {
        width: 100%;
        height: 100%;
    }

    .second {
        stroke: rgb(180, 0, 0);
    }
</style>

<div id="screen" on:mousemove={handleMousemove} on:click={addShape}>
    <svg viewBox='0 0 {scz.x} {scz.y}'>
        <rect class="second" x="{m.x}" y="{m.y}" width="100" height="100"/>
    </svg>
</div>

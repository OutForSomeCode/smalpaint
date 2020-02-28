<script>
    import {Circle} from "./shapes/Circle.ts"
    let m = {x: 0, y: 0};
    let pos = {x: 0, y: 0};

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    function addShape(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<style>
    svg {
        background-color: #eee;
        width: 100%;
        height: 100%;
    }
    #screen {
        width: 100%;
        height: 100%;
    }

    .second {
        stroke: rgb(180, 0, 0);
    }
</style>

<div id="screen" on:mousemove={handleMousemove} on:click={addShape}>
    <svg>
        <rect class="second" x="{m.x}" y="{m.y}" width="100" height="100"/>
        <circle r=""></circle>
    </svg>
</div>

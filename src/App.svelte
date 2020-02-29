<script lang="ts">
    import {Circle} from "./shapes/Circle.ts"
    import {Rectangle} from "./shapes/Rectangle.ts"

    let m = {x: 0, y: 0};
    let pos = {x: 0, y: 0};

    let DrawShapes = [new Circle(-100, -100, 5)];

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    function addShape(event) {
        DrawShapes.push(new Circle(event.clientX, event.clientY, 50));
        DrawShapes[0].x--;
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
        {#each DrawShapes as s}
            <g>
                {@html s.draw()}
            </g>
        {/each}
    </svg>
</div>

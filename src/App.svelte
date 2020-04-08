<script lang="ts">
    import {Circle} from "./shapes/Circle.ts"
    import {Square} from "./shapes/Square.ts"
    import {Rectangle} from "./shapes/Rectangle.ts"

    let shape = "circle";
    let DrawShapes = [];

    function updateShape(value) {
        this.shape = value;
    }

    function addShape(event) {
        if (shape === "circle") {
            DrawShapes.push(new Circle(event.clientX, event.clientY, 50, [`stroke: black;`, `fill: rgb(204,204,204);`]));
        } else {
            DrawShapes.push(new Square(event.clientX, event.clientY, 100, [`stroke: black;`, `fill: rgb(204,204,204);`]));
        }
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

</style>

<div class="controls">
    <input type="radio" bind:group={shape} value={"circle"} />
    <input type="radio" bind:group={shape} value={"square"} />
    {shape}
</div>

<div id="screen" on:click={addShape}>
    <svg>
        {#each DrawShapes as s}
            {#if s.type === "circle"}
                <circle cx="{s.posX}" cy="{s.posY}" r="{s.radius}" style="{s.style[0]} {s.style[1]}"/>
            {:else}
                <rect x="{s.posX}" y="{s.posY}" width="{s.size}" height="{s.size}" style="{s.style[0]} {s.style[1]}"/>
            {/if}}
        {/each}
    </svg>
</div>

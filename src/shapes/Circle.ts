import {string_literal} from "svelte/types/compiler/compile/utils/stringify";

class Circle implements IShapes {
    type: string = "circle";
    posX: number;
    posY: number;
    radius: number;
    style: string[];

    constructor(x: number, y: number, r: number, style: string[]) {
        this.posX = x;
        this.posY = y;
        this.radius = r;
        this.style = style;
    }

    get(): any[] {
        return [this.type, this.posX, this.posY, this.radius, this.style];
    }

    set(x, y, w, h, style: string[]) {
        this.posX = x;
        this.posY = y;
        this.radius = (w + h) / 4;
        this.style = style;
    }

    draw() {
        return `<circle cx="${this.posX}" cy="${this.posY}" r="${this.radius}" style="${this.style[0]} ${this.style[1]}"/>`;
    }
}

export {Circle}
class Rectangle implements IShapes {
    type: string = "rectangle";
    posX: number;
    posY: number;
    width: number;
    height: number;
    style: [];

    constructor(x ,y, w, h, style: []) {
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.style = style;
    }
    get(): any[] {
        return [this.posX, this.posY, this.width, this.height, this.style];
    }

    set(x, y, w, h, style: []) {
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.style = style;
    }
}

export {Rectangle}

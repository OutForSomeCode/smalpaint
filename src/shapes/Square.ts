class Square implements IShapes{
    type: string = "square";
    posX: number;
    posY: number;
    size: number;
    style: string[];

    constructor(x: number ,y: number, s: number, style: string[]) {
        this.posX = x;
        this.posY = y;
        this.size = s;
        this.style = style;
    }
    get(): any[] {
        return [this.type, this.posX, this.posY, this.size, this.style];
    }

    set(x, y, w, h, style: []) {
        this.posX = x;
        this.posY = y;
        this.size = (w + h) / 2;
        this.style = style;
    }
}

export {Square}

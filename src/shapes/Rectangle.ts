class Rectangle implements IShapes {
    x: number;
    y: number;
    sizeX: number;
    sizeY: number;

    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.sizeX = size;
        this.sizeY = size;
    }

    draw(): string {
        return `<rect x="${this.x}" y="${this.y}" width="${this.sizeX}" height="${this.sizeX}">`
    }
}

export {Rectangle}

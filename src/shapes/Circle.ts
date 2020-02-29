class Circle implements IShapes {
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
        return `<circle class="second" cx="${this.x}" cy="${this.y}" r="${this.sizeX}">`
    }
}

export {Circle}

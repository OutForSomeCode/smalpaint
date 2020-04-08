interface IShapes {
    type: string;
    posX: number;
    posY: number;
    style: string[];

    get(): any[];

    set(x, y, w, h, style: string[]);
}

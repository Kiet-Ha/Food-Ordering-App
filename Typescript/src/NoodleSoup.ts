import { Item, PAGE, Name, Extra } from "./Item";

export enum SOUP_NOODLE {
    EggNoodle = "Egg Noodles",
    VermicelliNoodle = "Vermicelli Noodle",
}

export class NoodleSoup extends Item {
    constructor(
        _id: number,
        _page: PAGE,
        _name: Name,
        _price: number,
        private _option: SOUP_NOODLE = SOUP_NOODLE.EggNoodle,
        private _extra: Extra = new Extra()
    ) {
        super(_id, _page, _name, _price);
    }

    get option() {
        return this._option;
    }

    override get price(): number {
        let extraPrice = 0;
        for (let extra of Object.values(this._extra)) {
            extraPrice += extra;
        }
        return this._price + extraPrice;
    }
}

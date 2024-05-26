// type ITEM = {
//     _no: number;
//     _page: string;
//     _name: NAME;
//     _price: number;
//     _completed: boolean;
// };

export const enum PAGE {
    Clam = "Clam",
    Entree = "Entree",
    Seafood = "Seafood",
    Beef = "Beef",
    Chicken = "Chicken",
    Pork = "Pork",
    Claypot = "Claypot",
    Vegetables = "Vegetables",
    FriedRice = "Fried Rice",
    FriedNoodles = "Fried Noodles",
    HerbalSoup = "Herbal Soup",
    Drink = "Drink",
    ClaypotRice = "Claypot Rice",
    NoodleSoup = "Egg Noodle Soup",
}

export type Name = {
    _chinese?: string;
    _vietnamese?: string;
    _english: string;
};

export class Extra {
    [extra: string]: number;
}

export abstract class Item {
    constructor(
        private _id: number,
        private _page: PAGE,
        private _name: Name,
        protected _price: number,
        // private _price: number,
        public served = false
    ) {}

    get id() {
        return this._id;
    }

    get page() {
        return this._page;
    }

    get name() {
        return this._name;
    }

    abstract get price(): number;
}

import { Item } from "./Item";

export class Order {
    private _isCompleted = false;
    constructor(
        private _table: number,
        private _items: Item[] = [],
        isTakeaway = false,
        private _isPaid = false
    ) {}

    Add(items: Item): void {
        this._items.push(items);
    }

    Remove(item: number): void {
        const removeIndex = this._items.findIndex((value) => value.id === item);
        if (removeIndex >= 0) this._items.splice(removeIndex, 1);
    }

    get items() {
        return this._items;
    }

    get table() {
        return this._table;
    }

    get isPaid() {
        return this._isPaid;
    }

    set isPaid(value: boolean) {
        this._isPaid = value;
    }

    get isCompleted() {
        return this._isCompleted;
    }

    set isCompleted(value: boolean) {
        this._isCompleted = value;
    }
}

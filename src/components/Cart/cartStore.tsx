import { makeObservable, observable, action } from 'mobx';
import { getOwnPropertyDescriptors } from 'mobx/dist/internal';
import { getItems } from '../API/api';

class Cart {
    id: number = Math.random();
    itemCount = 0;
    items: any;

    constructor(itemCount: number) {
        makeObservable(this, {
            itemCount: observable,
            add: action,
            load: action,
        });
        this.itemCount = itemCount;
    }

    load() {
        getItems().then((items) => (this.items = items));
    }

    add() {
        this.itemCount++;
    }
    clear() {
        this.itemCount = 0;
    }
}

export const CartStore = new Cart(0);

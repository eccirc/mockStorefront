import { makeObservable, observable, action } from 'mobx';

class Cart {
    id: number = Math.random();

    items = [];
    // constructor(itemCount: number) {
    //     makeObservable(this, {
    //         itemCount: observable,
    //         add: action,
    //     });
    //     this.itemCount = itemCount;
    // }
}

export const CartStore = new Cart();

import { computed, makeObservable, observable, action, runInAction } from 'mobx';
import { Product } from '../../types/Product';
import { createContext } from 'react';
import { getProducts } from './useClothingApi';

class MasterStore {
    product: Product[] = [];
    cart: Product[] = [];
    status = 'loading';
    selectedIndex = 0;

    constructor() {
        makeObservable(this, {
            product: observable,
            cart: observable,
            status: observable,
            selectedIndex: observable,
            addToCart: action,
            cartSize: computed,
        });
        runInAction(this.loadProducts);
    }

    loadProducts = () => {
        getProducts()
            .then((products) => (this.product = products))
            .then(() => (this.status = 'loaded'));
        if (this.product.length === 0) {
            this.status = 'error';
        }
    };

    @computed get cartSize() {
        console.log('from computed');
        return this.cart.length;
    }

    @action addToCart = (item: Product): void => {
        this.cart.push(item);
    };
}

export default createContext(new MasterStore());

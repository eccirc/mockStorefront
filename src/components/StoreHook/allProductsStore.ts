import { computed, makeObservable, observable, action, autorun, runInAction } from 'mobx';
import { Product } from '../../types/Product';
//import useClothingApi from './useClothingApi';
import { createContext } from 'react';
import { getProducts } from './useClothingApi';

class MasterStore {
    product: Product[] = [];
    cart: Product[] = [];
    status = 'loading';
    selectedIndex = 0;
    cartTotal = 0;

    constructor() {
        makeObservable(this, {
            product: observable,
            cart: observable,
            status: observable,
            selectedIndex: observable,
            cartTotal: observable,
            addToCart: action,
            cartSize: computed,
            totalProducts: computed,
        });
        runInAction(this.loadProducts);
    }

    loadProducts = () => {
        getProducts()
            .then((products) => (this.product = products))
            .then(() => (this.status = 'loaded'));
        // .catch((error) => ((this.status = 'error'), error));
        if (this.product.length === 0) {
            this.status = 'error';
        }
    };

    @computed get cartSize() {
        console.log('from computed');
        return this.cart.length;
    }

    @computed get totalProducts() {
        return this.product.length;
    }

    @action addToCart = (item: Product): void => {
        this.cart.push(item);
        this.cartTotal = this.cart.length;
        // console.log('from add to', this.cartSize);
    };
}

export default createContext(new MasterStore());

import { createContext } from 'react';
import { computed, makeObservable, observable, action, runInAction } from 'mobx';
import { ProductService } from '../../types/ProductsService';
import { Product } from '../../types/Product';

class ProductStoreState {
    result: ProductService<Product[]> = { status: 'loading' };
    cart: Product[] = [];
    currentProduct: Product = { itemName: '', itemPrice: '', itemSrc: '', id: '' };

    constructor() {
        makeObservable(this, {
            result: observable,
            cart: observable,
            currentProduct: observable,
            setCurrentProduct: action,
            addToCart: action,
            removeFromCart: action,
            cartSize: computed,
            cartTotal: computed,
        });
        runInAction(this.getProducts);
    }

    getProducts = () => {
        const ApiAddr = 'https://610ab70252d56400176aff42.mockapi.io/store/products/products';
        fetch(ApiAddr)
            .then((response) => response.json())
            .then((response) => (this.result = { status: 'loaded', payload: response }))
            .catch((error) => (this.result = { status: 'error', error }));

        // console.log(this.result);
    };

    @computed get cartSize() {
        return this.cart.length;
    }
    @computed get cartTotal() {
        let total = 0;
        for (const item of this.cart) {
            const cast: number = +item.itemPrice;
            total = total + cast;
        }
        return total;
    }

    @action setCurrentProduct = (index: string) => {
        const castIndex: number = +index;
        if (this.result.status === 'loaded') {
            this.currentProduct = this.result.payload[castIndex - 1];
            //console.log(this.currentProduct);
        }
    };

    @action addToCart = (item: Product): void => {
        this.cart.push(item);
    };

    @action removeFromCart = (item: Product) => {
        const index = this.cart.indexOf(item);
        if (index >= 0) {
            this.cart.splice(index, 1);
        }
    };
}

export default createContext(new ProductStoreState());

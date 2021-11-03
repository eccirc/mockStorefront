import { createContext } from 'react';
import { computed, makeObservable, observable, action, runInAction } from 'mobx';
import { ProductService } from '../../types/ProductsService';
import { Product } from '../../types/Product';
import { ItemisedCart } from '../../types/SortedCart';

class ProductStoreState {
    result: ProductService<Product[]> = { status: 'loading' };
    cart: Product[] = [];
    currentProduct: Product = { itemName: '', itemPrice: '', itemSrc: '', id: '', size: '' };

    constructor() {
        makeObservable(this, {
            result: observable,
            cart: observable,
            currentProduct: observable,
            setCurrentProduct: action,
            setSize: action,
            getProducts: action,
            addToCart: action,
            removeFromCart: action,
            emptyCart: action,
            cartSize: computed,
            cartTotal: computed,
            itemised: computed,
        });
        runInAction(this.getProducts);
    }

    @action getProducts = () => {
        const ApiAddr = 'https://610ab70252d56400176aff42.mockapi.io/store/products/products';
        fetch(ApiAddr)
            .then((response) => response.json())
            .then((response) => {
                this.result = { status: 'loaded', payload: response };
            })
            .catch((error) => (this.result = { status: 'error', error }));
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
    @computed get itemised() {
        const countOccurrences = (arr: Product[], val: Product) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
        const Cart: ItemisedCart[] = [];
        const uniqueItems = Array.from(new Set(this.cart));
        uniqueItems.forEach((product) => {
            Cart.push({ item: product, quantity: countOccurrences(this.cart, product) });
        });
        return Cart;
    }

    @action setCurrentProduct = (index: string) => {
        const castIndex: number = +index;
        if (this.result.status === 'loaded') {
            this.currentProduct = this.result.payload[castIndex - 1];
            // const result = this.result.payload[castIndex - 1];
            // this.currentProduct = {
            //     itemName: result.itemName,
            //     itemPrice: result.itemPrice,
            //     itemSrc: result.itemSrc,
            //     id: result.id,
            //     size: '',
            // };
            //console.log(this.currentProduct);
        }
    };
    @action setSize = (size: string) => {
        this.currentProduct.size = size;
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
    @action emptyCart = () => {
        this.cart.splice(0, this.cart.length);
    };
}

export default createContext(new ProductStoreState());

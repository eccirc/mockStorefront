import React, { useContext } from 'react';
import ProductStoreState from '../../components/storeApi/storeState';
import { Product } from '../../types/Product';
import { observer } from 'mobx-react-lite';

export interface sortedCart {
    item: Product;
    quantity: number;
}

const Cart: React.FC = () => {
    const store = useContext(ProductStoreState);
    const { itemised, cart } = store;

    return (
        <div className="w-full h-screen heading mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 h-full border-r">
                {cart.length === 0 && <h1 className="text-2xl">Your cart is empty</h1>}
                {cart.length > 0 && (
                    <div>
                        <h1 className="text-2xl mb-2">Your cart contains {store.cartSize} items</h1>
                        {itemised.map((item, index) => (
                            <span className="flex justify-between mb-2" key={index}>
                                <p>
                                    {item.item.itemName} size {item.item.size} x {item.quantity} £{item.item.itemPrice}
                                </p>
                                <p className="font-semibold">£{Number(item.item.itemPrice) * item.quantity}</p>
                            </span>
                        ))}
                        <button className="border-2 p-2 mt-10" onClick={store.emptyCart}>
                            remove all
                        </button>
                    </div>
                )}
            </div>
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">Checkout Now</h2>
                <span className="flex justify-between text-2xl">
                    <h3>Total</h3>
                    <h3>£{store.cartTotal > 0 ? store.cartTotal : 0}</h3>
                </span>
            </div>
        </div>
    );
};

export default observer(Cart);

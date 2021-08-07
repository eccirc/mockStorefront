import React, { useContext } from 'react';
import MasterStore from '../../components/storeApi/allProductsStore';

const Cart: React.FC = () => {
    const store = useContext(MasterStore);
    const { cart } = store;

    return (
        <div className="w-full h-screen heading mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 h-full border-r">
                {cart.length === 0 && <h1 className="text-4xl">Your cart is empty</h1>}
                {cart.length > 0 && <h1 className="text-4xl">Your cart contains {store.cartSize} items</h1>}
            </div>
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">Checkout Now</h2>
                <span className="flex justify-between text-2xl">
                    <h3>Total</h3>
                    <h3>£0.00</h3>
                </span>
            </div>
        </div>
    );
};

export default Cart;

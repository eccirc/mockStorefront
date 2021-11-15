import React, { useContext } from 'react';
import ProductStoreState from '../../components/storeApi/storeState';
import { observer } from 'mobx-react-lite';
import { Billing } from '../../components/Checkout/Billing';

const Checkout: React.FC = () => {
    const store = useContext(ProductStoreState);
    const { itemised } = store;

    const shipping = 4;

    return (
        <div className="w-full h-screen heading mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 h-full border-r">
                <h1 className="text-3xl font-bold mb-4">Secure Checkout</h1>
                <p className="mb-4">Delivery & payment confirmation</p>
                <h2 className="text-xl font-bold mb-4">Billing</h2>
                <Billing />
            </div>
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Cart Summary</h1>

                {itemised.map((item, index) => (
                    <span className="flex justify-between mb-2" key={index}>
                        <p>
                            {item.item.itemName} size {item.item.size} x {item.quantity}
                        </p>
                    </span>
                ))}
                <div className="flex justify-between mb-2">
                    <h1 className="text-base font-bold">Subtotal</h1>
                    <p>£{store.cartTotal}</p>
                </div>
                <div className="flex justify-between mb-2">
                    <h1 className="text-base font-bold">Shipping</h1>
                    <p>£{shipping}</p>
                </div>
                <div className="flex justify-between mb-2">
                    {' '}
                    <h1 className="text-base font-bold">Total</h1>
                    <p className="font-bold text-lg">£{store.cartTotal + shipping}</p>
                </div>
            </div>
        </div>
    );
};

export default observer(Checkout);

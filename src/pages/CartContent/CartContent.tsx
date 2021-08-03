import React from 'react';

const Cart: React.FC = () => {
    return (
        <div className="w-full h-screen heading mx-auto bg-white grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 h-full border-r">
                <h1 className="text-4xl">Your cart is empty</h1>
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

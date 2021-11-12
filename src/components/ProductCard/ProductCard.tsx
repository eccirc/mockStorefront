import React, { useContext, useState } from 'react';
//import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import ProductStoreState from '../storeApi/storeState';

const ProductCard: React.FC<Product> = ({ itemName, itemPrice, itemSrc, id = '0' }) => {
    const store = useContext(ProductStoreState);

    const { cart } = store;

    const cartCount = () => {
        let count;
        if (store.itemised.some((item) => item.item.itemName === itemName)) {
            const temp = store.itemised.find((item) => item.item.itemName === itemName);
            count = temp?.quantity;
        } else count = 0;
        return count;
    };

    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(cart.some((item) => item.itemName === itemName));
    const [inCart, setInCart] = useState(cartCount);

    const incQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decQuantity = () => {
        setQuantity(quantity - 1);
        if (quantity <= 1) {
            setQuantity(1);
        }
    };

    const selectItem = (id: string) => {
        store.setCurrentProduct(id);
        for (let i = 0; i < quantity; i++) {
            store.addToCart(store.currentProduct);
        }
        setQuantity(1);
        setAdded(cart.some((item) => item.itemName === itemName));
        setInCart(cartCount());
    };
    const removeAll = () => {
        store.setCurrentProduct(id);
        if (inCart !== undefined && inCart > 0) {
            for (let index = 0; index < inCart; index++) {
                store.removeFromCart(store.currentProduct);
            }
            setAdded(cart.some((item) => item.itemName === itemName));
        }
    };

    return (
        <div className="w-full">
            <img src={itemSrc} alt="product" className="h-48 w-full object-cover" />
            <span className="p-2 heading flex flex-row justify-between">
                <p className="font-normal">{itemName}</p>
                <p className="font-bold">{itemPrice}</p>
            </span>
            <span>
                Chia portland swag farm-to-table vice mlkshk stumptown chartreuse activated charcoal PBR&B gochujang
                tacos. Post-ironic DIY polaroid mustache. Marfa DIY seitan tattooed cliche man bun deep v post-ironic.
            </span>
            <span className="block ">
                {' '}
                <button
                    className={`rounded-md  p-2 text-white mt-2' ${added ? 'bg-green-500' : 'bg-yellow-500'}`}
                    onClick={() => {
                        selectItem(id);
                    }}
                >
                    {added ? 'Add More' : 'Add Item'}
                </button>
                <span className="ml-4 text-lg">
                    <button className="mr-4" onClick={() => decQuantity()}>
                        -
                    </button>
                    {quantity}
                    <button className="ml-4" onClick={() => incQuantity()}>
                        +
                    </button>
                </span>
                {added && (
                    <button
                        className={`rounded-md  p-2 text-white mt-2 bg-yellow-700 ml-8`}
                        onClick={() => {
                            removeAll();
                        }}
                    >
                        Remove {inCart} items
                    </button>
                )}
            </span>
        </div>
    );
};

export default ProductCard;

import React, { useContext } from 'react';
//import { useParams } from 'react-router';
import ProductStoreState from '../../components/storeApi/storeState';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Product } from 'types/Product';

const ProductDetail: React.FC = () => {
    const store = useContext(ProductStoreState);

    const sizes = ['S', 'M', 'L'];

    const [size, setSize] = useState('');
    const [item, setItem] = useState<Product>(store.currentProduct);

    const selectSize = (selected: React.ChangeEvent<HTMLSelectElement>) => {
        const value = selected.target.value;
        setSize(value);
        // console.log(selected.target.value);
    };
    const pushToCart = () => {
        setItem(store.currentProduct);
        item.size = size;
        console.log(item);
        store.addToCart(item);
    };

    return (
        <div className="h-auto lg:h-screen mb-20 bg-white flex justify-start md:pt-20">
            <div className="mx-auto pt-4 px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <span>
                    <img
                        className=" object-scale-down w-3/5 mx-auto"
                        src={store.currentProduct.itemSrc}
                        alt="random image"
                    />
                </span>
                <span className=" px-8 heading">
                    <span className="font-bold text-2xl flex justify-between mb-4">
                        <p>{store.currentProduct.itemName}</p>
                        <p>{store.currentProduct.itemPrice}</p>
                    </span>
                    <p className="font-normal">
                        Chia portland swag farm-to-table vice mlkshk stumptown chartreuse activated charcoal PBR&B
                        gochujang tacos. Post-ironic DIY polaroid mustache. Marfa DIY seitan tattooed cliche man bun
                        deep v post-ironic. Bushwick brooklyn kickstarter migas prism iPhone man braid viral hoodie VHS
                        cliche pabst. Brooklyn tote bag post-ironic 8-bit kogi. Vinyl four loko cold-pressed, plaid
                        before they sold out artisan austin.
                    </p>
                    <br />

                    <select name="sizes" className="flex my-4" defaultValue="select a size" onChange={selectSize}>
                        <option disabled value="select a size">
                            select a size
                        </option>
                        {sizes.map((item, index) => (
                            <option
                                className="rounded-md border p-2 w-10 text-center hover:bg-gray-500 text-xl"
                                key={index}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() => pushToCart()}
                        className="rounded-md bg-yellow-600 text-center text-white w-full p-2 text-lg"
                    >
                        {store.cart.includes(store.currentProduct) ? 'Add another?' : 'Add to cart'}
                    </button>
                </span>
            </div>
        </div>
    );
};

export default observer(ProductDetail);

import React, { useContext, useState } from 'react';
import { Product } from '../../types/Product';
import { useParams } from 'react-router';
import MasterStore from '../../components/storeApi/allProductsStore';
import { observer } from 'mobx-react-lite';

interface Props {
    product: Product[];
    // addTo(product: Product): void;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
    const store = useContext(MasterStore);

    const sizes = ['S', 'M', 'L', 'XL'];

    type productParams = {
        id: string;
    };

    const { id } = useParams<productParams>();
    const cast: number = +id;

    return (
        <div className="w-full mx-auto bg-white pt-4 px-4 pb-16 grid grid-cols-1  md:grid-cols-2 gap-8">
            <span>
                <img className=" object-scale-down  w-3/5 mx-auto" src={product[cast - 1].itemSrc} alt="random image" />
            </span>
            <span className=" px-8 heading">
                <span className="font-bold text-2xl flex justify-between mb-4">
                    <p>{product[cast - 1].itemName}</p>
                    <p>{product[cast - 1].itemPrice}</p>
                </span>
                <p className="font-normal">
                    Chia portland swag farm-to-table vice mlkshk stumptown chartreuse activated charcoal PBR&B gochujang
                    tacos. Post-ironic DIY polaroid mustache. Marfa DIY seitan tattooed cliche man bun deep v
                    post-ironic. Bushwick brooklyn kickstarter migas prism iPhone man braid viral hoodie VHS cliche
                    pabst. Brooklyn tote bag post-ironic 8-bit kogi. Vinyl four loko cold-pressed, plaid before they
                    sold out artisan austin.
                </p>
                <span className="flex my-4">
                    {sizes.map((item, index) => (
                        <p className="rounded-md border p-2 w-10 text-center hover:bg-gray-500 text-xl" key={index}>
                            {item}
                        </p>
                    ))}
                </span>
                <button
                    onClick={() => store.addToCart(product[cast - 1])}
                    className="rounded-md bg-yellow-600 text-center text-white w-full p-2 text-lg"
                >
                    Add to Basket
                </button>
            </span>
        </div>
    );
};

export default observer(ProductDetail);

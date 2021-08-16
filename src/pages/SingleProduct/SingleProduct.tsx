import React, { useContext } from 'react';
import { Product } from '../../types/Product';
import { useParams } from 'react-router';
import ProductStoreState from '../../components/storeApi/storeState';
import { observer } from 'mobx-react-lite';

const ProductDetail: React.FC = () => {
    const store = useContext(ProductStoreState);

    const sizes = ['S', 'M', 'L', 'XL'];

    type productParams = {
        id: string;
    };

    const { id } = useParams<productParams>();
    const cast: number = +id;

    return (
        <div className="h-auto lg:h-screen mb-20 bg-white flex justify-start md:pt-20">
            {/* <div className="w-screen h-screen fixed m-0 bg-gray-500 bg-opacity-40">
                <div className="flex w-full h-full justify-center items-center">
                    <div className="w-2/6 h-2/6 bg-white">A box</div>
                </div>
            </div> */}

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
                    <span className="flex my-4">
                        {sizes.map((item, index) => (
                            <p className="rounded-md border p-2 w-10 text-center hover:bg-gray-500 text-xl" key={index}>
                                {item}
                            </p>
                        ))}
                    </span>
                    <button
                        onClick={() => store.addToCart(store.currentProduct)}
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

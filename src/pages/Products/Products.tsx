import React from 'react';
import ProductCard from 'components/ProductCard/ProductCard';
import { Product } from 'types/Product';

interface Props {
    products: Product[];
    status: string;
}

const Products: React.FC<Props> = ({ products, status }) => {
    return (
        <div>
            {status === 'loading' && (
                <div className="w-full min-h-screen mx-auto bg-white heading">Loading Products...</div>
            )}
            {status === 'loaded' && (
                <div className="w-full min-h-screen mx-auto bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 px-4 pb-16">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            itemName={product.itemName}
                            itemSrc={`http://lorempixel.com/400/200/food/${index % 11}/`}
                            itemPrice={product.itemPrice}
                        ></ProductCard>
                    ))}
                </div>
            )}
            {status === 'error' && (
                <div className="w-full min-h-screen mx-auto bg-white heading">Error loading products! </div>
            )}
        </div>
    );
};

export default Products;

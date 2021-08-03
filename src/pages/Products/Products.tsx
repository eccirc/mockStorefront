import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products: React.FC = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="w-full min-h-screen mx-auto bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 px-4 pb-16">
            {items.map((index) => (
                <ProductCard key={index}></ProductCard>
            ))}
        </div>
    );
};

export default Products;

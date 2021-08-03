import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard: React.FC = () => {
    return (
        <Link to="/SingleProduct" className="rounded border hover:shadow-md w-full h-80 bg-white">
            <div className="w-full">
                <img src="https://source.unsplash.com/ujM15VLBAz0" alt="product" className="h-48 w-full object-cover" />
                <span className="p-2 heading flex flex-row justify-between">
                    <p className="font-normal">item name</p>
                    <p className="font-bold">£20</p>
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

const ProductCard: React.FC<Product> = ({ itemName, itemPrice, itemSrc, id }) => {
    return (
        <Link to={`/SingleProduct/${id}`} className="rounded border hover:shadow-md w-full h-80 bg-white">
            <div className="w-full">
                <img src={itemSrc} alt="product" className="h-48 w-full object-cover" />
                <span className="p-2 heading flex flex-row justify-between">
                    <p className="font-normal">{itemName}</p>
                    <p className="font-bold">{itemPrice}</p>
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;

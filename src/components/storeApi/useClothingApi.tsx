import { Product } from '../../types/Product';

// TODO - error handling!
export const getProducts = (): Promise<Product[]> => {
    const ApiAddr = 'https://610ab70252d56400176aff42.mockapi.io/store/products/products';
    return fetch(ApiAddr).then((response) => response.json());
};

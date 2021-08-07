// import React, { useState, useEffect } from 'react';
// import { ProductService } from '../../types/ProductsService';
import { Product } from '../../types/Product';

// TODO - error handling!
export const getProducts = (): Promise<Product[]> => {
    const ApiAddr = 'https://610ab70252d56400176aff42.mockapi.io/store/products/products';
    return fetch(ApiAddr).then((response) => response.json());
};

// THIS HOOK IS GOOD BUT DOESN'T QUITE WORKWITH THIS CONFIGUARATION

// const useClothingApi = () => {
//     //useState utilising Union types from ProductService and Products above
//     const [result, setResult] = useState<ProductService<Product[]>>({
//         status: 'loading',
//     });

//     //NOTE - this won't catch all errors!!
//     useEffect(() => {
//         //URL = mockAPI
//         fetch('https://610ab70252d56400176aff42.mockapi.io/store/products/products')
//             .then((response) => response.json())
//             .then((response) => setResult({ status: 'loaded', payload: response }))
//             .catch((error) => setResult({ status: 'error', error }));
//     }, []);
//     return result;
// };

// export default useClothingApi;

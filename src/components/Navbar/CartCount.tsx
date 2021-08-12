import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ProductStoreState from '../storeApi/storeState';

const CartCount = () => {
    const store = useContext(ProductStoreState);
    const { cartSize } = store;

    return <span>{cartSize}</span>;
};

export default observer(CartCount);

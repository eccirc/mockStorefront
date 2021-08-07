import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import MasterStore from '../storeApi/allProductsStore';

const CartCount = () => {
    const store = useContext(MasterStore);
    const { cartSize } = store;

    return <span>{cartSize}</span>;
};

export default observer(CartCount);

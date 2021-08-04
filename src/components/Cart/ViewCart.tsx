import React from 'react';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { CartStore } from './cartStore';

interface Props {
    cart: typeof CartStore;
    userCart: string[];
}

const showItems = (): void => {
    CartStore.load();
    console.log(CartStore.items);
};

const ViewCart: FC = observer(() => (
    <div>
        <h2>Cart</h2>

        <span>{CartStore.itemCount}</span>
        <button className="border m-1 p-2" onClick={() => CartStore.add()}>
            Add Item
        </button>

        <button className="border m-1 p-2" onClick={() => CartStore.clear()}>
            Clear
        </button>
        <button className="border m-1 p-2" onClick={() => showItems()}>
            Show Items
        </button>
    </div>
));

export default ViewCart;

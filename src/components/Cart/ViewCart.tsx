import React from 'react';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { CartStore } from './cartStore';

const ViewCart: FC = observer(() => (
    <div>
        <h2>Cart</h2>
        <span>{}</span>
        <span></span>
    </div>
));

export default ViewCart;

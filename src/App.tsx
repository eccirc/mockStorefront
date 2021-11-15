import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import ProductDetail from './pages/SingleProduct/SingleProduct';
import Cart from './pages/CartContent/CartContent';
import Checkout from 'pages/Checkout/Checkout';
import ProductStoreState from './components/storeApi/storeState';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
    const Store = useContext(ProductStoreState);
    return (
        <Router>
            <div className="bg-gray-100 ">
                <Navbar></Navbar>
                <div className="container mx-auto min-h-screen">
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/Products">
                            {Store.result.status === 'loaded' && (
                                <Products products={Store.result.payload} status={Store.result.status} />
                            )}
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/SingleProduct/:id">{Store.result.status === 'loaded' && <ProductDetail />}</Route>
                        <Route path="/Cart">
                            <Cart />
                        </Route>
                        <Route path="/Checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                </div>
                <aside className="heading w-full bg-white p-2 fixed border-t bottom-0">
                    <div className="text-sm font-bold text-center flex flex-row justify-start items-center">
                        <p className="font-normal">(EAT)</p>
                        <p className="font-normal">2021</p>
                    </div>
                </aside>
            </div>
        </Router>
    );
};

export default observer(App);

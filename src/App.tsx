import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import ProductDetail from './pages/SingleProduct/SingleProduct';
import Cart from './pages/CartContent/CartContent';
import MasterStore from './components/storeApi/allProductsStore';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
    const store = useContext(MasterStore);

    console.log(store.status);

    return (
        <Router>
            <div className="bg-gray-50 min-h-screen">
                <Navbar></Navbar>
                <div className="container mx-auto">
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/Products">
                            <Products products={store.product} status={store.status} />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/SingleProduct/:id">
                            {store.status === 'loaded' && <ProductDetail product={store.product} />}
                        </Route>
                        <Route path="/Cart">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
                <aside className="heading w-full bg-white p-2 fixed border-t bottom-0">
                    <div className="text-sm font-bold text-center flex flex-row justify-end  items-center">
                        <p>W</p>
                        <p className="font-normal mr-2">(E)</p>
                        <p className="font-normal mr-2">2021</p>
                    </div>
                </aside>
            </div>
        </Router>
    );
};

export default observer(App);

import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import ProductDetail from './pages/SingleProduct/SingleProduct';
import Cart from './pages/CartContent/CartContent';

//const Home = lazy(() => import('./pages/Home/Home'));

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

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
                            <Products />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/SingleProduct">
                            <ProductDetail />
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

export default App;

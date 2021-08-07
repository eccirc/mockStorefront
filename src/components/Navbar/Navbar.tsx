import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartLogo from '../../Logos/cart.png';
import CartCount from './CartCount';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuShow = (show = false) => {
        setShowMenu(show);
    };

    return (
        <div className="bg-white sticky top-0 z-50 w-full text-gray-800 heading border-b ">
            <div className="flex flex-row sm:p-6 justify-between text-xl items-center">
                <span className="font-bold text-center sm:flex flex-row hidden">
                    W<span className="font-normal">(E)</span>
                </span>
                <div className="text-center m-4 flex flex-row sm:hidden tracking-wide">
                    <button onClick={() => menuShow(true)}>Menu</button>
                    {showMenu ? (
                        <ul className="absolute bg-white w-2/5 h-72 border-r border-b -m-4">
                            <li className="my-8">
                                <button onClick={() => menuShow(false)}>X</button>
                            </li>
                            <li className="mx-4 my-8">
                                <Link to="/" onClick={() => menuShow(false)}>
                                    Home
                                </Link>
                            </li>
                            <li className="mx-4 my-8">
                                <Link to="/Products" onClick={() => menuShow(false)}>
                                    Products
                                </Link>
                            </li>
                            <li className="mx-4 my-8 ">
                                <Link to="/About" onClick={() => menuShow(false)}>
                                    Story
                                </Link>
                            </li>
                        </ul>
                    ) : null}
                </div>

                <ul className="sm:flex flex-row hidden">
                    <li className="mx-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/Products">Products</Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/About">Story</Link>
                    </li>
                </ul>

                <Link to="/Cart" className="flex flex-row justify-center items-center pr-4">
                    <p className="text-center mr-4">
                        Cart <CartCount />{' '}
                    </p>

                    <img className="w-10 h-10 object-contain " src={CartLogo} alt="Your Cart" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

// @ts.ignore
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartLogo from '../../Logos/cart.png';
import CartCount from './CartCount';
import { CSSTransition } from 'react-transition-group';
import './menu.css';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [liStyle, setliStyle] = useState('list-enter');

    const menuItems = [
        { name: 'Home', link: '/', index: 1 },
        { name: 'Products', link: '/Products', index: 2 },
        { name: 'Story', link: '/About', index: 3 },
    ];

    const menuShow = (show = false) => {
        setShowMenu(show);
        if (show) {
            setTimeout(() => setliStyle('list-enter-active'), 300);
        } else {
            setTimeout(() => setliStyle('list-enter'), 100);
        }
    };

    return (
        <div className="bg-white sticky top-0 z-50 w-full text-gray-800 heading border-b ">
            <div className="flex flex-row sm:p-6 justify-between text-xl items-center">
                <span className="font-bold text-center sm:flex flex-row hidden">
                    W<span className="font-normal">(E)</span>
                </span>
                <div className="text-center m-4 flex flex-row sm:hidden tracking-wide">
                    <button onClick={() => menuShow(true)}>Menu</button>

                    <CSSTransition in={showMenu} unmountOnExit timeout={500} classNames="menu">
                        <ul className="absolute bg-white w-2/5 h-72 border-r border-b -m-4">
                            <li className="my-8">
                                <button onClick={() => menuShow(false)}>X</button>
                            </li>

                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={'my-8 px-4  ' + liStyle}
                                    style={{ transition: `all ${item.index / 2}s` }}
                                >
                                    <Link to={item.link} onClick={() => menuShow(false)}>
                                        {' '}
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </CSSTransition>
                </div>

                <ul className="sm:flex flex-row hidden">
                    {menuItems.map((item) => (
                        <li className=" mx-4" key={item.name}>
                            <Link to={item.link} onClick={() => menuShow(false)}>
                                {' '}
                                {item.name}
                            </Link>
                        </li>
                    ))}
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

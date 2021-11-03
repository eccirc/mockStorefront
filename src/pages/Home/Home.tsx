import React from 'react';
import './Home.css';
import mainLogo from '../../Logos/foodTrans.png';

const Home: React.FC = () => {
    return (
        <div className="h-screen bg-image overflow-y-hidden overscroll-none">
            <img className="object-contain w-full lg:w-2/3 mx-auto my-auto lg:-mt-24" src={mainLogo} alt="Logo" />
        </div>
    );
};

export default Home;

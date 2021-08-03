import React from 'react';
import './Home.css';
import mainLogo from '../../Logos/Wear(e)YourSelf-logos_white.png';

const Home: React.FC = () => {
    return (
        <div className=" overflow-hidden h-full m-auto items-center bg-image">
            <img className="object-contain w-full lg:w-2/3 mx-auto" src={mainLogo} alt="Logo" />
        </div>
    );
};

export default Home;

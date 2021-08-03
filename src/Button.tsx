import React from 'react';

type Props = {
    buttonText: string;
    count?: number;
    onClick: () => void;
};

const Button: React.FC<Props> = ({ buttonText, count, onClick }) => {
    return (
        <div>
            <button onClick={() => onClick()}>
                {buttonText} {count}{' '}
            </button>
        </div>
    );
};

export default Button;

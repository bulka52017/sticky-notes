import React from 'react';
import { ButtonContainer } from './Button.styles';

const Button = ({ clicked, children, bgColor }) => {
    return (
        <ButtonContainer bgColor={bgColor} onClick={clicked}>
            {children}
        </ButtonContainer>
    );
};

export default Button;

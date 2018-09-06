import * as React from 'react';
import { ButtonStyled } from './button-style';

interface IButtonProps {
    text: string;
}

const Button: React.SFC<IButtonProps> = (props) => {
    return (
        <ButtonStyled>
            {props.text}
        </ButtonStyled>
    );
};

export default Button;
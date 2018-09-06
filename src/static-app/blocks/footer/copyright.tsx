import * as React from 'react';
import { CopyrightStyled } from './styles';

interface ICopyrightProps {
    text: string;
}

const Copyright: React.SFC<ICopyrightProps> = (props) => {
    return(
        <CopyrightStyled>
            {props.text}
        </CopyrightStyled>
    );
};

export default Copyright;
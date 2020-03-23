import React from "react";
import { NormalText,FixedText } from "./styled";
interface Props {
    value: string;
    fontsize?: string;
    color?: boolean;
}

const Text: React.FC<Props> = ({
    value,
    fontsize,
    color = false,
    ...rest
}) => {
    return (
        <NormalText
            fontsize={`${!!fontsize ? fontsize : '10'}`}
            color={`${!!color ? color : 'black'}`}
            {...rest}
        >
            {value}
        </NormalText>
    );
};


const SideText: React.FC<any> = ({children}) => {
    return (
        <FixedText>
            {children}

        </FixedText>
    );
};
export {Text,SideText};

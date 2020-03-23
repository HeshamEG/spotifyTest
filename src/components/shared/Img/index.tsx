import React, { Component } from 'react'; // literally anything, don't even have to use it

interface Props {
    src: string
}

const Img: React.FC<Props> = ({
    src,
    ...otherProps
}) => {
    return (
        <div></div>
    );
};

export default Img;

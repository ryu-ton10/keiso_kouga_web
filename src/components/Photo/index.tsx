import React from 'react';
import { Image } from 'antd';

type Props = {
    work: string;
}

function Photo(props: Props) {
    const { work } = props;

    return (
        <Image src={process.env.PUBLIC_URL + work} />
    );
}

export default Photo;

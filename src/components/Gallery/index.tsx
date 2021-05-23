import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';

type Photo = {
    id: string;
    path: string;
}

type Props = {
    photos: Photo[];
}

const Gallery: React.FC<Props> = (props) => {

    const { photos } = props;

    return (
        <div className="gallery">
            <Row>
                {photos.map((photo) => {
                    const { path } = photo;
                    return (
                        <Col lg={12} xs={12}><Image src={path} /></Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Gallery;

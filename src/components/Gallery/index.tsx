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
    const style = { padding: '20px 20px 20px 20px'};

    return (
        <div className="gallery">
            <Row>
                {photos.map((photo) => {
                    const { path } = photo;
                    return (
                        <Col lg={12} xs={24}><Image src={path} style={style}/></Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Gallery;

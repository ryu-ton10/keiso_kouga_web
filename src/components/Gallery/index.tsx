import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';

const Gallery: React.FC = () => {

    return (
        <div className="gallery">
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} className="vertical">
                    <Image src="Gallery/gallery_6.webp" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} className="horizonal">
                    <Image src="Gallery/gallery_5.webp" />
                    <Image src="Gallery/gallery_2.webp" />
                </Col>
            </Row>
        </div>
    );
}

export default Gallery;

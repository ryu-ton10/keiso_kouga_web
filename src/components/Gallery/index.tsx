import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';

function Gallery() {

    return (
        <div className="gallery">
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} className="vertical">
                    <Image src="Gallery/gallery_waterfall.webp" fallback="Gallery/gallery_waterfall.jpeg" />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} className="horizonal">
                    <Image src="Gallery/gallery_mountain.webp" fallback="Gallery/gallery_mountain.jpeg" />
                    <Image src="Gallery/gallery_susukino.webp" fallback="Gallery/gallery_susukino.jpg" />
                </Col>
            </Row>
        </div>
    );
}

export default Gallery;

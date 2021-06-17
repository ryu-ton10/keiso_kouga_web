import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';

function Gallery() {

    return (
        <div className="gallery">
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} className="vertical">
                    <Image 
                        src="Gallery/gallery_waterfall_prev.webp"
                        fallback="Gallery/gallery_waterfall_prev.jpeg"
                        preview={{
                            src: "Gallery/gallery_waterfall.webp",
                        }}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} className="horizonal">
                    <Image
                        src="Gallery/gallery_mountain_prev.webp"
                        fallback="Gallery/gallery_mountain_prev.jpeg"
                        preview={{
                            src: "Gallery/gallery_mountain.webp",
                        }}
                    />
                    <Image
                        src="Gallery/gallery_susukino_prev.webp"
                        fallback="Gallery/gallery_susukino_prev.jpg"
                        preview={{
                            src: "Gallery/gallery_susukino.webp",
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Gallery;

import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';

type Publishment_Image = {
    webp: string;
    jpeg: string;
}

type Book = {
    id: string;
    title: string;
    description: string;
    image: Publishment_Image;
    url: string;
}

type Props = {
    books: Book[];
}

const Publishment: React.FC<Props> = (props) => {

    const { books } = props;

    return (
        <div className="publishment">
            <div className="publishment-title">
                <div className="publishment-title-rgba">
                    <p className="publishment-title-jp">同人誌</p>
                    <p className="publishment-title-en">Publishment</p>
                </div>
            </div>
            <div className="publishment-cell">
                <Row gutter={24}>
                    {books.map((book) => {
                        const { title, description, image, url } = book;
                        return (
                        <>
                            <Col xs={24} sm={12} md={12} lg={10} className="publishment-icon">
                                <Image src={process.env.PUBLIC_URL + image.webp} fallback={process.env.PUBLIC_URL + image.jpeg} />
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={14} className="publishment-descriptions">
                                <p className="publishment-name">{title}</p>
                                <p className="publishment-detail">{description}</p>
                                <a href={url} rel="noopener noreferrer" target="_blank">
                                    <img src={process.env.PUBLIC_URL + "assocbutt_or_detail.png"} alt="amazon icon"/>
                                </a>
                            </Col>
                        </>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Publishment;

import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';

type Book = {
    id: string;
    title: string;
    description: string;
    image: string;
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
                    <div className="publishment-title-text">
                        <p className="publishment-title-jp">出版物</p>
                        <p className="publishment-title-en">Publishment</p>
                    </div>
                </div>
            </div>
            <div className="publishment-cell">
                <Row gutter={24}>
                    {books.map((book) => {
                        const { title, description, image, url } = book;
                        return (
                        <>
                            <Col lg={10} xs={24} className="publishment-icon">
                                <Image src={process.env.PUBLIC_URL + image} alt="icon" />
                            </Col>
                            <Col lg={14} xs={24} className="publishment-descriptions">
                                <h2>{title}</h2>
                                <h3>{description}</h3>
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

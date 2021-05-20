import React from 'react';
import './index.css';
import { Row, Col } from 'antd';

type Publishment = {
    id: string;
    title: string;
    description: string;
    image: string;
}

type Props = {
    publishments: Publishment[];
}

const Publishment: React.FC<Props> = (props) => {

    const { publishments } = props;

    return (
        <div className="publishment">
            <div className="publishment-title">
                <div className="publishment-title-rgba">
                    <div className="publishment-title-text">
                        <div className="publishment-title-jp">出版物</div>
                        <div className="publishment-title-en">Publishment</div>
                    </div>
                </div>
            </div>
            <div className="publishment-cell">
                <Row gutter={24}>
                    {publishments.map((publishment) => {
                        const { title, description, image } = publishment;
                        return (
                        <>
                            <Col lg={10} xs={24} className="publishment-icon">
                                <img src={process.env.PUBLIC_URL + image} alt="icon" />
                            </Col>
                            <Col lg={14} xs={24} className="publishment-descriptions">
                                <h2>{title}</h2>
                                <h3>{description}</h3>
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

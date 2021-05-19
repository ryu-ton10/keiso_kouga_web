import React from 'react';
import './index.css';
import icon from '../../assets/tsumugi.jpeg';
import { Row, Col } from 'antd';

const Publishment: React.FC = () => {
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
                    <Col lg={8} xs={24} className="publishment-icon">
                        <img src={String(icon)} alt="icon" />
                    </Col>
                    <Col lg={16} xs={24} className="publishment-descriptions">
                        <div className="book-title">紬 -つむぎ-</div>
                        <div className="book-description">日本各地の風景を集めた一冊。<br/>それらはまさに、日本の旅を紡いだ。</div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Publishment;

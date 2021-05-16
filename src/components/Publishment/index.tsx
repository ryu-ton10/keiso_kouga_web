import React from 'react';
import '../../style.css';
import icon from '../../assets/tsumugi.jpeg';
import { Row, Col } from 'antd';

const Publishment: React.FC = () => {
    return (
        <div className="publishment">
            <div className="publishment-title">
                出版物
            </div>
            <div className="publishment-cell">
                <Row gutter={24}>
                    <Col lg={8} xs={24} className="publishment-icon">
                        <img src={String(icon)} alt="icon" />
                    </Col>
                    <Col lg={16} xs={24} className="publishment-descriptions">
                        <h3>紬 -つむぎ-</h3>
                        <h4>日本各地の風景を、１つの紡ぎ唄のように連ね想いを馳せることが出来る１冊。</h4>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Publishment;

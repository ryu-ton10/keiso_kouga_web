import React from 'react';
import '../../style.css';
import icon from '../../assets/icon.jpg';
import { Row, Col } from 'antd';

const Members: React.FC = () => {
    return (
        <>
            <div className="member-title">
                メンバー
            </div>
            <div className="member-cell">
                <Row gutter={12}>
                    <Col lg={4} xs={8} className="member-icon"><img src={String(icon)} alt="icon" /></Col>
                    <Col lg={8} xs={16} className="member-name"><p>とんと</p></Col>
                    <Col lg={4} xs={8} className="member-icon"><img src={String(icon)} alt="icon" /></Col>
                    <Col lg={8} xs={16} className="member-name"><p>つきー</p></Col>
                </Row>
            </div>
        </>
    );
}

export default Members;

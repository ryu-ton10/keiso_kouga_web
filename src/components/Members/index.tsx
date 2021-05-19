import React from 'react';
import '../../style.css';
import icon from '../../assets/icon.jpg';
import { Row, Col } from 'antd';

const Members: React.FC = () => {
    return (
        <div className="member">
            <div className="member-title">
                <div className="member-title-rgba">
                    <div className="member-title-text">
                        <div className="member-title-jp">紡ギ人</div>
                        <div className="member-title-en">Members</div>
                    </div>
                </div>
            </div>
            <div className="member-cell">
                <Row gutter={12}>
                    <Col lg={12} xs={24} className="member-icon">
                        <img src={String(icon)} alt="icon" />
                        <p>とんと</p>
                    </Col>
                    <Col lg={12} xs={24} className="member-icon">
                        <img src={String(icon)} alt="icon" />
                        <p>つきー</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Members;

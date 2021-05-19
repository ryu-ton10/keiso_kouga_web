import React from 'react';
import './index.css';
import { Row, Col } from 'antd';

type Member = {
    id: string;
    name: string;
    image: string;
}

type Props = {
    members: Member[];
}

const Members: React.FC<Props> = (props) => {

    const { members } = props;

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
                    {members.map((member) => {
                        const { name, image } = member;
                        return (
                            <Col lg={12} xs={24} className="member-icon">
                                <img src={process.env.PUBLIC_URL + image} alt="icon" />
                                <p>{name}</p>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Members;

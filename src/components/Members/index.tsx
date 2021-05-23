import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';

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
                {members.map((member) => {
                    const { name, image, works } = member;
                    return (
                        <Row>
                            <Col lg={12} xs={24} className="member-icon">
                                <img src={process.env.PUBLIC_URL + image} alt="icon" />
                            </Col>
                            <Col lg={12} xs={24} className="member-profile">
                                <p>{name}</p>
                                <Row>
                                    {works.map((work) => {
                                        return (
                                            <Image src={process.env.PUBLIC_URL + "Gallery/" + work} />
                                        );
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </div>
    );
}

export default Members;

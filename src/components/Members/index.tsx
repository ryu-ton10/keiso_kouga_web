import React from 'react';
import './index.css';
import { Row, Col, Image, Carousel } from 'antd';
import { TwitterCircleFilled } from '@ant-design/icons';

type Member = {
    id: string;
    name: string;
    image: string;
    works: string[];
    twitter_url: string;
    keywords: string[];
    camera: string;
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
                        <p className="member-title-jp">紡ギ人</p>
                        <p className="member-title-en">Members</p>
                    </div>
                </div>
            </div>
            <div className="member-cell">
                {members.map((member) => {
                    const { name, image, works, twitter_url, camera } = member;
                    return (
                        <Row>
                            <Col xs={24} sm={12} md={10} lg={10} className="member-profile-left">
                                <img src={process.env.PUBLIC_URL + image} alt="icon" />
                                <Row>
                                    <p className="name">{name}</p>
                                    <a href={twitter_url} rel="noopener noreferrer" target="_blank"><TwitterCircleFilled /></a>
                                </Row>
                                <p>使用機材: {camera}</p>
                            </Col>
                            <Col xs={24} sm={12} md={14} lg={14} className="member-profile-right">
                                <p>{name}'s Gallery</p>
                                <Carousel autoplay>
                                    {works.map((work) => {
                                        return (
                                            <Image src={process.env.PUBLIC_URL + "Gallery/" + work} />
                                        );
                                    })}
                                </Carousel>
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </div>
    );
}

export default Members;

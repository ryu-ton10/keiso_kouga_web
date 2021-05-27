import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';
import { TwitterCircleFilled } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
// Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

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

SwiperCore.use([Navigation, Autoplay]);

const Members: React.FC<Props> = (props) => {

    const { members } = props;

    return (
        <div className="member">
            <div className="member-title">
                <div className="member-title-rgba">
                    <p className="member-title-jp">紡ギ人</p>
                    <p className="member-title-en">Members</p>
                </div>
            </div>
            <div className="member-cell">
                {members.map((member) => {
                    const { name, image, works, twitter_url, camera } = member;
                    return (
                        <Row>
                            <Col xs={24} sm={12} md={10} lg={10} className="member-profile-left">
                                <img src={process.env.PUBLIC_URL + image} alt="icon" />
                                <Row className="names">
                                    <p className="name">{name}</p>
                                    <a href={twitter_url} rel="noopener noreferrer" target="_blank"><TwitterCircleFilled /></a>
                                </Row>
                                <p>使用機材: {camera}</p>
                            </Col>
                            <Col xs={24} sm={12} md={14} lg={14} className="member-profile-right">
                                <Swiper
                                    autoplay={{delay: 3000}}
                                    navigation={true}
                                >
                                    {works.map((work) => {
                                        return (
                                            <SwiperSlide>
                                                <Image src={process.env.PUBLIC_URL + "MajorWorks/" + work} />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </div>
    );
}

export default Members;

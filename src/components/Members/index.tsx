import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';
import { TwitterCircleFilled } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
// Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

type Member_Image = {
    webp: string;
    jpeg: string;
}

type Member = {
    id: string;
    name: string;
    icon: Member_Image;
    works: Member_Image[];
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
                <p className="member-title-jp">紡ギ人</p>
                <p className="member-title-en">Members</p>
            </div>
            <div className="member-cell">
                {members.map((member) => {
                    const { name, icon, works, twitter_url, camera } = member;
                    return (
                        <Row>
                            <Col xs={24} sm={12} md={10} lg={10} className="member-profile-left">
                                <picture>
                                    <source type="image/webp" srcSet={process.env.PUBLIC_URL + icon.webp}></source>
                                    <img src={process.env.PUBLIC_URL + icon.jpeg} alt="icon" />
                                </picture>
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
                                                <Image
                                                    src={process.env.PUBLIC_URL + work.webp}
                                                    fallback={process.env.PUBLIC_URL + work.jpeg}
                                                />
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

import React from 'react';
import './index.css';
import { Row, Col, Image } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
// Swiper styles
import "swiper/swiper.min.css";
import 'swiper/components/pagination/pagination.scss';
import { MemberWork, MemberIcon } from 'keisoKougaWebData';

type Props = {
  name: string;
  icon: MemberIcon;
  works: MemberWork[];
  twitter_url: string;
  camera: string;
}

SwiperCore.use([Pagination, Autoplay]);

function MemberCard(props: Props) {

  return (
    <div className="member-card">
      <Row>
        <Col xs={24} sm={8} md={8} lg={8} className="member-profile-left">
          <picture>
            <source type="image/webp" srcSet={process.env.PUBLIC_URL + props.icon.webp}></source>
            <img src={process.env.PUBLIC_URL + props.icon.jpeg} alt="icon" />
          </picture>
          <Row className="names">
            <p className="name">{props.name}</p>
            <a href={props.twitter_url} rel="noopener noreferrer" target="_blank"><TwitterOutlined /></a>
          </Row>
          <p>使用機材: {props.camera}</p>
        </Col>
        <Col xs={24} sm={16} md={16} lg={16} className="member-profile-right">
          <Swiper
            autoplay={{delay: 2000}}
            pagination={{ clickable: true }}
          >
            {props.works.map((work) => {
              return (
                <SwiperSlide>
                  <Image
                    src={process.env.PUBLIC_URL + work.pre_webp}
                    fallback={process.env.PUBLIC_URL + work.pre_jpeg}
                    preview={{
                      src: `${process.env.PUBLIC_URL + work.webp}`,
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
    </div>
  );
}

export default MemberCard;

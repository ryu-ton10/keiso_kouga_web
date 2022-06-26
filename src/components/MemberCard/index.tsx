import React from 'react';
import './index.css';
import { Row, Col } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import { MemberWork, MemberIcon } from 'keisoKougaWebData';
import SimpleImageSlider from 'react-simple-image-slider';

type Props = {
  key: number;
  name: string;
  icon: MemberIcon;
  works: MemberWork[];
  twitter_url: string;
  camera: string;
}

function MemberCard(props: Props) {

  const { innerWidth: width } = window;

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
          <SimpleImageSlider
            width={width < 576 ? width*0.8 : width*0.55}
            height={width < 576 ? (width*0.8)*0.66 : (width*0.55)*0.66}
            images={props.works}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MemberCard;

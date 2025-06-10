import './index.css';
import { TwitterOutlined } from '@ant-design/icons';
import type { MemberWork, MemberIcon } from 'keisoKougaWebData';
import SimpleImageSlider from 'react-simple-image-slider';

type Props = {
  key: string;
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
      <div className="member-profile-left">
        <picture>
          <source type="image/webp" srcSet={process.env.PUBLIC_URL + props.icon.webp} />
          <img src={process.env.PUBLIC_URL + props.icon.jpeg} alt="icon" />
        </picture>
        <p className="name">{props.name}</p>
        <p>使用機材: {props.camera}</p>
        <a href={props.twitter_url} rel="noopener noreferrer" target="_blank"><TwitterOutlined /></a>
      </div>
      <div className="member-profile-right">
        <SimpleImageSlider
          width={getWidth(width)}
          height={(getWidth(width))*0.66}
          images={props.works}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
        />
      </div>
    </div>
  );
}

/**
 * 作例写真の横幅の値を、現在の画面幅に応じて返却する
 * @param [number] width
 * @return [number]
 */
function getWidth(width: number) {
  if(width < 576) {
    return width*0.8;
  }
  if(width >= 576 && width < 960) {
    return width*0.55;
  }
  return width*0.4;
}

export default MemberCard;

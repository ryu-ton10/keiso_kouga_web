import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import './index.css';
import bgImage from './../../assets/title_chayagai.jpg';


function Title() {

  const [isLoading, setIsLoading] = useState(true);
  const style = {
    backgroundImage: `url(${bgImage})`
  }

  const fetchImage = new Promise((resolve, reject) => {
    // 画像のPreloadを実行
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
        resolve("completed to load");
    };
  })

  useEffect(() => {
    // タイトルDOMの背景画像を事前にレンダリングする
    fetchImage.then((successMessage) => {
        setIsLoading(false);
    })
  });

  return (
    <>
      {isLoading
      ?
      <div className="title-cover">
        <Spin size="large" />
      </div>
      :
      <div className="title" style={style}>
        <div className="title-rgba">
          <div className="title-text">
            <h1 className="title-main">珪素光画</h1>
            <p className="title-sub">日常を、写真で紡ぐ。</p>
            <p className="scroll"><span /></p>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default Title;

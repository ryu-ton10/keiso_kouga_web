import React from 'react';
import './index.css';
import { Image } from 'antd';

function Gallery() {

  return (
    <div className="gallery">
      <Image
        src="Gallery/gallery_waterfall_prev.webp"
        fallback="Gallery/gallery_waterfall_prev.jpeg"
        alt="赤目四十八滝"
        preview={{
            src: "Gallery/gallery_waterfall.webp",
        }}
      />
      <div className="gallery-right">
        <Image
          src="Gallery/gallery_mountain_prev.webp"
          fallback="Gallery/gallery_mountain_prev.jpeg"
          alt="見通しの良い道"
          preview={{
              src: "Gallery/gallery_mountain.webp",
          }}
        />
        <Image
          src="Gallery/gallery_susukino_prev.webp"
          fallback="Gallery/gallery_susukino_prev.jpg"
          alt="北海道すすきの"
          preview={{
              src: "Gallery/gallery_susukino.webp",
          }}
        />
      </div>
    </div>
  );
}

export default Gallery;

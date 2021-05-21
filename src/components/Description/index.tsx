import React from 'react';
import './index.css';

const Description: React.FC = () => {
    return (
        <div className="description">
            <div className="description-title">
                <p>珪素光画の世界へ、ようこそ</p>
            </div>
            <div className="description-content">
                <p>写真サークル 珪素光画は、日本の風景を写真を通してカタチにしています。<br/>
                荘厳な自然や身の回りの何気ない日常などを見ていると<br/>
                新たな発見をすることが出来るかも知れません。<br/>
                そんな体験を生むために、今日もカメラを構えます。</p>
            </div>
        </div>
    );
}

export default Description;

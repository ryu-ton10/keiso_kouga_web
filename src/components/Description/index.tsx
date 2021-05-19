import React from 'react';
import './index.css';

const Description: React.FC = () => {
    return (
        <div className="description">
            <div className="description-title">
                <p>珪素光画の世界へ、ようこそ。</p>
            </div>
            <div className="description-content">
                <p>写真サークル 珪素光画は、日本の風景を写真を通してカタチにしています。<br/>
                荘厳な自然や身の回りの何気ない日常など、それらは全て思い出となり、<br/>
                今まで気がつかなかった新たな発見をすることが出来るかも知れません。<br/>
                その発見をあなたが幸せ感じることが出来れば、私たちもまた、幸せです。<br/>
                そんな体験を、私たちは写真を通して生み出そうと、今日もカメラを構えます。</p>
            </div>
        </div>
    );
}

export default Description;

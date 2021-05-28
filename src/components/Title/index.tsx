import React from 'react';
import './index.css';

const Title: React.FC = () => {
    return (
        <div className="title">
            <div className="title-rgba">
                <div className="title-text">
                    <p className="title-main">珪素光画</p>
                    <p className="title-sub">日常を、写真で紡ぐ。</p>
                    <p className="scroll"><span></span></p>
                </div>
            </div>
        </div>
    );
}

export default Title;

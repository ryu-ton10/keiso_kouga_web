import React, { useState } from 'react';
import PrivacyPolicy from 'components/PrivacyPolicy';
import './index.css';

type Props = {
  privacy_policy: string;
  twitter_url: string;
};

function Footer(props: Props) {
  
  const { privacy_policy, twitter_url } = props;
  const [isShowModal, setIsShowModal] = useState(false);
  
  return (
    <div className="footer" data-testid="footer">
      <div className="privacy_policy">
        <p onClick={ () => setIsShowModal(true) }>プライバシーポリシー</p>
      </div>
      {isShowModal &&
        <PrivacyPolicy scentence={privacy_policy} hook={setIsShowModal} />
      }
      <p>©︎2022    <a href={twitter_url} rel="noopener noreferrer" target="_blank">@meitonto37</a></p>
    </div>
  );
};

export default Footer;

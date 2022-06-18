import React, { useState } from 'react';
import Title from 'pages/Title';
import Description from 'pages/Description';
import Gallery from 'pages/Gallery';
import Members from 'pages/Members';
import Publishment from 'pages/Publishment';
import PrivacyPolicy from 'components/PrivacyPolicy';
import './App.css';
import 'antd/dist/antd.css';
import { members, books, privacy_policy } from 'data/data';
import { Layout } from 'antd';

function App() {
  
  const { Footer } = Layout;
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="main">
      <Title />
      <Description />
      <Gallery />
      <Members members={members} />
      <Publishment books={books} />
      <Layout>
        <div className="privacy_policy">
          <a onClick={ () => setIsShowModal(true) }>プライバシーポリシー</a>
        </div>
        {isShowModal &&
          <PrivacyPolicy scentence={privacy_policy} hook={setIsShowModal} />
        }
        <Footer style={{ textAlign: 'center' }}>©︎2021 <a href="https://twitter.com/27ma4_ton10" rel="noopener noreferrer" target="_blank">@27ma4_ton10</a></Footer>
      </Layout>
    </div>
  );
}

export default App;

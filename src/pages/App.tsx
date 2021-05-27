import React from 'react';
import Title from 'components/Title';
import Description from 'components/Description';
import Gallery from 'components/Gallery';
import Members from 'components/Members';
import Publishment from 'components/Publishment';
import './App.css';
import 'antd/dist/antd.css';
import { members, books } from 'data/data';
import { Layout } from 'antd';

function App() {
  
  const { Footer } = Layout;

  return (
      <div className="main">
        <Title />
        <Description />
        <Gallery />
        <Members members={members} />
        <Publishment books={books} />
        <Layout>
          <Footer style={{ textAlign: 'center' }}>©︎ 2021 Ryusei Nomi</Footer>
        </Layout>
      </div>
  );
}

export default App;

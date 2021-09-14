import React from 'react';
import Title from 'pages/Title';
import Description from 'pages/Description';
import Gallery from 'pages/Gallery';
import Members from 'pages/Members';
import Publishment from 'pages/Publishment';
import './App.css';
import 'antd/dist/antd.css';
import { members, books } from 'data/data';
import { Layout } from 'antd';

function App() {
  
  const { Footer } = Layout;
  const date = new Date();

  return (
      <div className="main">
          <Title />
          <Description />
          <Gallery />
          <Members members={members} />
          <Publishment books={books} />
          <Layout>
              <Footer style={{ textAlign: 'center' }}>©︎ {date.getFullYear()} Ryusei Nomi</Footer>
          </Layout>
      </div>
  );
}

export default App;

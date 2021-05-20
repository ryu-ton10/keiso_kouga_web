import React from 'react';
import Title from '../components/Title';
import Description from '../components/Description';
import Members from '../components/Members';
import Publishment from '../components/Publishment';
import './App.css';
import 'antd/dist/antd.css';
import { members, publishments } from './../data/data';
import { Layout } from 'antd';

function App() {
  
  const { Footer } = Layout;

  return (
      <div className="main">
        <Title />
        <Description />
        <Members members={members}/>
        <Publishment publishments={publishments}/>
        <Layout>
          <Footer style={{ textAlign: 'center' }}>©︎ 2021 珪素光画</Footer>
        </Layout>
      </div>
  );
}

export default App;

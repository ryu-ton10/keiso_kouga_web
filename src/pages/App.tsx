import React from 'react';
import Title from '../components/Title';
import Description from '../components/Description';
import Members from '../components/Members';
import Publishment from '../components/Publishment';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
      <div className="main">
        <Title />
        <Description />
        <Members />
        <Publishment />
      </div>
  );
}

export default App;

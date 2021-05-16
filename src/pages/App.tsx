import React from 'react';
import Title from '../components/Title';
import Members from '../components/Members';
import Publishment from '../components/Publishment';
import 'antd/dist/antd.css';

function App() {
  return (
      <div className="main">
        <Title />
        <Members />
        <Publishment />
      </div>
  );
}

export default App;

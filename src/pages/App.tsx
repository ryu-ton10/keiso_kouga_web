import React from 'react';
import Title from 'pages/Title';
import Description from 'pages/Description';
import Gallery from 'pages/Gallery';
import Members from 'pages/Members';
import Publishment from 'pages/Publishment';
import Footer from 'pages/Footer';
import './App.css';
import 'antd/dist/antd.css';
import { members, books, privacy_policy, twitter_url } from 'data/data';

function App() {
  return (
    <div className="main">
      <Title />
      <Description />
      <Gallery />
      <Members members={members} />
      <Publishment books={books} />
      <Footer privacy_policy={privacy_policy} twitter_url={twitter_url} />
    </div>
  );
}

export default App;

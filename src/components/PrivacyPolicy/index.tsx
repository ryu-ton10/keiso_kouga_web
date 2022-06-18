import React from 'react';
import './index.css';

type Props = {
  scentence: string;
  hook: Function;
}

function PrivacyPolicy(props: Props) {

  const { scentence, hook } = props;

  return(
    <div className="overlay">
      <div className="modal">
        <p>{scentence}</p>
        <button onClick={ () => hook(false) }>OK</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

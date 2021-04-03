import './App.scss';
import React, { useState } from 'react';
import { LineLogin } from 'reactjs-line-login';
import 'reactjs-line-login/dist/index.css';

function App() {
  const [payload, setPayload] = useState(null);
  const [idToken, setIdToken] = useState(null);
  return (
    <div className="App">
      <LineLogin
        clientID={process.env.REACT_APP_CLIENT_ID}
        clientSecret={process.env.REACT_APP_CLIENT_SECRET}
        state={process.env.REACT_APP_STATE}
        nonce={process.env.REACT_APP_NONCE}
        redirectURI={process.env.REACT_APP_REDIRECT_URI}
        scope={process.env.REACT_APP_SCOPE}
        setPayload={setPayload}
        setIdToken={setIdToken}
      />
      {payload && idToken ? (
        console.log('payload', payload, 'idToken', idToken)
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

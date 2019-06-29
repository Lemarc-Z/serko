import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider0(props) {
  // flag
  const [isLoggedIn, setLoggedIn] = useState(false);

  function checkLoggedInA() {
    console.log('- checkLoggedInA');
    let loggedIn = window.localStorage.getItem('isLoggedIn');
    loggedIn = loggedIn === '1';

    console.log(`- AuthContext isLoggedIn: ${isLoggedIn}`);
    setLoggedIn(loggedIn);

    return loggedIn;
  }

  function onSignup() {
    window.localStorage.setItem('isLoggedIn', 1);
    setLoggedIn(true);
  }


  const authctx = {
    isLoggedIn,
    checkLoggedInA,
    onSignup,
  };

  return (
    <AuthContext.Provider value={authctx}>
      {props.children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;
const AuthProvider = withRouter(AuthProvider0);

export {
  AuthProvider,
  AuthContext,
  AuthConsumer,
};

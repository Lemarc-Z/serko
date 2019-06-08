import React, { useState } 		    from 'react';
import { withRouter }               from 'react-router-dom';

var     AuthContext     = React.createContext ();

function AuthProvider0 (props) {

        // flag
        let   [ isLoggedIn, setLoggedIn ]       = useState (false);

        function checkLoggedInA () {
                console.log (`- checkLoggedInA`)
                let     loggedIn          = window.localStorage.getItem ('isLoggedIn');
                loggedIn               	  = loggedIn === '1' ? true : false;

                console.log (`- AuthContext isLoggedIn: ${isLoggedIn}`);
                setLoggedIn (loggedIn);

                return loggedIn;
        }

        function onSignup () {					
                window.localStorage.setItem ('isLoggedIn', 1);
                setLoggedIn (true);
        }


        let     authctx     = {
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

var AuthConsumer    = AuthContext.Consumer;
var AuthProvider    = withRouter (AuthProvider0);

export {
        AuthProvider,
        AuthContext,
        AuthConsumer,
};

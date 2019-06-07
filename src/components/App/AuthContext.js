import React, { useState } 		from 'react';

var     AuthContext     = React.createContext ();

function AuthProvider (props) {

		let   [ isLoggedIn, setLoggedIn ]       = useState (false);

		async function checkLoggedInA () {
				console.log (`- checkLoggedInA`)
				let     loggedIn          = window.localStorage.getItem ('isLoggedIn');
				loggedIn               	  = loggedIn === '1' ? true : false;

				console.log (`- AuthContext isLoggedIn: ${isLoggedIn}`);
				setLoggedIn (loggedIn);

				return loggedIn;
		}

		async function onSignup () {					
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

export {
		AuthProvider,
		AuthContext,
		AuthConsumer,
};

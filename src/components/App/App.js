import React, { useState, useContext }	from 'react';
import { Route,
         Switch,
         Redirect }         from 'react-router-dom';
import 						'./App.css';
import { MuiThemeProvider, 
		 createMuiTheme } 	from '@material-ui/core/styles';
import { makeStyles } 		from '@material-ui/core/styles';
import Snackbar 			from '@material-ui/core/Snackbar';
import SnackbarContent 		from '@material-ui/core/SnackbarContent';
import ErrorIcon 			from '@material-ui/icons/Error';
// AuthStack
import SignupCard 			from '../AuthStack/SignupCard';
import WelcomeCard 			from '../AuthStack/WelcomeCard';

import { AuthProvider,
         AuthConsumer,
         AuthContext }     	from '../App/AuthContext';


const theme = createMuiTheme ({
        palette: {
                primary: {
                        main: '#006ba9'
                },
                error: {
                        main: '#d03134'
                }
        }
});

function PassRoute (props) {
        let   { component: Component,
                ...rest }               = props;

        return (
                <Route {...rest} render={props => <Component {...props} {...rest} />} />
        );
}


function AuthRoute (props) {
	    let   { component: Component,
	            ...rest }               = props;


        return (
                <AuthConsumer>
                        {authctx => {
                                return <Route {...rest} render={props => <Component {...props} authctx={authctx} {...rest} />} />;
                        }}
                </AuthConsumer>
        );
}

function PostSignup (props) {
	
	    let   { authctx,
	            location }      = props;
				
	    let     passprops       = {
				authctx,
				location,
	    };
		
		return (
				authctx.checkLoggedInA ? 
                        <Switch key={location.key}>
                                <PassRoute path="/welcome" exact {...passprops} component={WelcomeCard} />
                        </Switch>
						: <Redirect to={{pathname: '/signup', state: {from: location}}} />
				)
}

function App () {
    
        // https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
        
        // To do multi-lingo / test success
        // let     lang = (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
        //                     navigator.language ||   // All browsers
        //                     navigator.userLanguage || navigator.systemLanguage || navigator.browserLanguage; // IE <= 10
	
		let   [ open, setOpen ]             	= useState (false);
		let   [ message, setMessage ]           = useState ('');
		
        let     authctx                         = useContext (AuthContext);
		
		var 	classes 	= useStyles ();
		
		function handleClose (event, reason) {
				if (reason === 'clickaway') return;
				setOpen (false);
		}
	
	    function onToast (text) {
				setMessage (text);
				setOpen (true);		
	    }
		
        let     passprops       = {
                // authctx,   // duplicated 
                onToast,
        };
	
		return (
                <MuiThemeProvider theme={theme}>
                        <AuthProvider className="App">			
                                <Switch>
                                        <AuthRoute path="/signup" component={SignupCard} {...passprops} exact />
                                        <AuthRoute component={PostSignup} />
                                </Switch>
                        </AuthProvider>
                        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} >
                                <SnackbarContent className={classes.error}
                                        message={<span id="client-snackbar" className={classes.message}>
                                        <ErrorIcon className={classes.icon} />
                                        {message}
                                        </span>
                                        }
                                />
                        </Snackbar>
                        <p className={classes.sig}>Powered By Serko</p>
                </MuiThemeProvider>
		);
}

var useStyles = makeStyles (theme => ({
		error: {
				backgroundColor: theme.palette.error.dark,
		},
		icon: {
				fontSize: 20,
				opacity: 0.9,
				marginRight: theme.spacing (1),
		},
		message: {
				display: 'flex',
				alignItems: 'center',
		},
		sig: {
				textAlign: 'center', 
				margin: '10px auto'
		}
}));

export default App;

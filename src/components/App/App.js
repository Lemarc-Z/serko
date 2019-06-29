import React, { useState }	from 'react';
import {
  Route,
  Switch,
  Redirect, 
} from 'react-router-dom';
import 						'./App.css';
import {
  MuiThemeProvider,
		 createMuiTheme, 
, makeStyles } 	from '@material-ui/core/styles';

import Snackbar 			from '@material-ui/core/Snackbar';
import SnackbarContent 		from '@material-ui/core/SnackbarContent';
import ErrorIcon 			from '@material-ui/icons/Error';
// AuthStack
import SignupCard 			from '../AuthStack/SignupCard';
import WelcomeCard 			from '../AuthStack/WelcomeCard';

import {
  AuthProvider,
  // AuthContext,
  AuthConsumer, 
} from './AuthContext';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006ba9',
    },
    error: {
      main: '#d03134',
    },
  },
});

function PassRoute(props) {
  const {
    component: Component,
    ...rest
  } = props;

  return (
    <Route {...rest} render={props => <Component {...props} {...rest} />} />
  );
}


function AuthRoute(props) {
	    const {
    component: Component,
	            ...rest
  } = props;


  return (
    <AuthConsumer>
            {authctx => <Route {...rest} render={props => <Component {...props} authctx={authctx} {...rest} />} />}
          </AuthConsumer>
  );
}

function PostSignup(props) {
	    const {
    authctx,
	            location, 
  } = props;

	    const passprops = {
    authctx,
    location,
	    };

  console.log(`- authctx: ${JSON.stringify(authctx)}`);
  authctx.checkLoggedInA();

  return (
    authctx.isLoggedIn
      ? (
<Switch key={location.key}>
                          <PassRoute path="/welcome" exact {...passprops} component={WelcomeCard} />
                        </Switch>
)
      : <Redirect to={{ pathname: '/signup', state: { from: location } }} />
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  // let     authctx                         = useContext (AuthContext);

  let 	classes 	= useStyles();

  function handleClose(event, reason) {
    if (reason === 'clickaway') return;
    setOpen(false);
  }

	    function onToast(text) {
    setMessage(text);
    setOpen(true);
	    }

  const passprops = {
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
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <SnackbarContent
                            className={classes.error}
                            message={(
                                    <span id="client-snackbar" className={classes.message}>
  <ErrorIcon className={classes.icon} />
  {message}
</span>
)
                                        }
                          />
                  </Snackbar>
    <p className={classes.sig}>Powered By Serko</p>
  </MuiThemeProvider>
  );
}

var useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  sig: {
    textAlign: 'center',
    margin: '10px auto',
  },
}));

export default App;

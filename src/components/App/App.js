import React, { useState }	from 'react';
import 						'./App.css';
import { MuiThemeProvider, 
		 createMuiTheme } 	from '@material-ui/core/styles';
import { makeStyles } 		from '@material-ui/core/styles';
import Snackbar 			from '@material-ui/core/Snackbar';
import SnackbarContent 		from '@material-ui/core/SnackbarContent';
import ErrorIcon 			from '@material-ui/icons/Error';
// AuthStack
import SignupCard 			from '../AuthStack/SignupCard';


const 	theme 	= createMuiTheme ({
				palette: {
						primary: {
								main: '#006ba9'
						},
						error: {
								main: '#d03134'
						}
				}
		},
)

function App () {
	
		let   [ open, setOpen ]             	= useState (false);
		let   [ message, setMessage ]           = useState ('');
		
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
	            onToast,
	    };
	
		return (
				<MuiThemeProvider theme={theme}>
						<div className="App">
								<SignupCard {...passprops}/>
						</div>
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

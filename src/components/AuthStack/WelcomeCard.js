import React 				from 'react';
import Card 				from '@material-ui/core/Card';
import Button 				from '@material-ui/core/Button';
import { makeStyles } 		from '@material-ui/core/styles';


const 	serkoLogo = require('../../Images/SerkoLogo.svg');

function SignupCard() {
  const 	classes 	= useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.logoView}>
        <img src={serkoLogo} alt="could not find the logo" className={classes.logo} />
        <p style={{ color: 'grey' }}>Serko</p>
      </div>
      <div className={classes.textView}>
        <b>Welcome to Serko's online booking and expense tool</b>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        <b>GET STARTED</b>
      </Button>
    </Card>
  );
}

var useStyles = makeStyles({
  card: {
    padding: '35px 0',
    maxWidth: 375,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px 0',
  },
  logo: {
    maxWidth: '60px',
    maxHeight: '60px',

  },
  logoView: {
    marginBottom: '30px',
  },
	    button: {
    width: '80%',
	    },
	    textView: {
    margin: '30px auto',
    width: '74%',
    textAlign: 'left',
    color: 'grey',
	    },
});

export default SignupCard;

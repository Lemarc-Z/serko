import React, { useState } 	from 'react';
import Card 				from '@material-ui/core/Card';
import Button 				from '@material-ui/core/Button';
import { makeStyles } 		from '@material-ui/core/styles';

//
import UniTextField 		from '../Universal/UniTextField';
import LingoSelect 			from '../Special/LingoSelect';

var 	serkoLogo      	= require ('../../Images/SerkoLogo.svg');  

function SignupCard () {

        var 	classes 	= useStyles ();
        
        let   [ email, setEmail ]               = useState ('');
        let   [ password, setPassword ]         = useState ('');
        let   [ password0, setPassword0 ]       = useState ('');
        let   [ language, setLanguage ]         = useState ('');

        return (
                <Card className={classes.card}>
                        <div className={classes.logoView}>
                                <img src={serkoLogo} alt='could not find the logo' className={classes.logo} />
                                <p style={{color: 'grey'}}>Sign up with Serko</p>
                        </div>
                        <UniTextField placeholder='Email *' id='email' required={true} type='Email' onChangeTxt={setEmail} />
                        <UniTextField placeholder='Password *' id='pwd' required={true} type='Password' onChangeTxt={setPassword} />
                        <UniTextField placeholder='Confirm Password *' id='cfmPwd' required={true} type='Password' onChangeTxt={setPassword0} />
                        <LingoSelect id='lingo' placeholder='Preferred Language *' type='Language' onChangeTxt={setLanguage} />						
                        <Button variant="contained" color="primary" className={classes.button}>
                                <b>SIGN UP</b>
                        </Button>
                </Card>
        );
}

var useStyles = makeStyles ({
		card: {
				padding: 		'35px 0',
				maxWidth: 		375,
                marginLeft:     'auto',
                marginRight:    'auto',
				textAlign: 		'center',
                alignItems:     'center',
                justifyContent: 'center',
				margin: 		'30px 0',
		},
		logo: {
				maxWidth: 		'60px',
				maxHeight: 		'60px', 
				
		},
		logoView: {
				marginBottom: 	'60px',
		},
	    button: {
				marginTop: 		'20px',
				width:  		'80%',	
	    },
});

export default SignupCard;

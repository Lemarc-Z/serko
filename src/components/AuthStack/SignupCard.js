import React, { useState } 	from 'react';
import Card 				from '@material-ui/core/Card';
import Button 				from '@material-ui/core/Button';
import { makeStyles } 		from '@material-ui/core/styles';

//
import UniTextField 		from '../Universal/UniTextField';
import LingoSelect 			from '../Special/LingoSelect';
// helpers
import HttpHelper      		from '../Helpers/HttpHelper';
import ValidateHelper       from '../Helpers/ValidateHelper';
import LingoContentHelper   from '../Helpers/LingoContentHelper';

var 	serkoLogo      	= require ('../../Images/SerkoLogo.svg');  

function SignupCard (props) {

        var 	classes 	= useStyles ();
        
        let   [ email, setEmail ]               = useState ('');
        let   [ password, setPassword ]         = useState ('');
        let   [ password0, setPassword0 ]       = useState ('');
        let   [ language, setLanguage ]         = useState ('');
        
        let   { authctx }       = props;
        
        let     content         = LingoContentHelper.contentByLang ();
        
        // console.log (`- content: ${JSON.stringify (content)}`);
        
        async function onSignUp () {
                // console.log (`onSignUp`);
                
                try {
                        // validate b4 submit
                        let     userArgs     = [
                                {val: password, errmsg: `password is required`, chktype: 'required'},
                                {val: password, errmsg: `password must contain number`, chktype: 'regex', regex: /[0-9]/},
                                {val: password, errmsg: `password must contain lowercase`, chktype: 'regex', regex: /[a-z]/},
                                {val: password, errmsg: `password must contain uppercase`, chktype: 'regex', regex: /[A-Z]/},
                                {val: password, errmsg: `password length less than 5`, chktype: 'length', func: len => len > 5},

                                {val: email, errmsg: `email is required`, chktype: 'required'},
                                {val: email, errmsg: `Invalid email`, chktype: 'regex', regex: /\S+@\S+\.\S+/},

                                {val: language, errmsg: `language is required`, chktype: 'required'},
                                {val: language, errmsg: `Invalid language`, chktype: 'value', func: val => val === 'en-AU' || val === 'en-NZ' || val === 'en-UK' || val === 'en-US'},

                                {val: [password, password0], errmsg: 'Passwords entries not the same', chktype: 'diff'},
                                
                                // already registered  -- temp
                                {val: email, errmsg: `Already Registered`, chktype: 'value', func: val => val === 'newuser@serko.com' },
                                {val: password, errmsg: `Already Registered`, chktype: 'value', func: val => val === 'Abc123' },
                                {val: language, errmsg: `Already Registered`, chktype: 'value', func: val => val === 'en-NZ' },

                        ];
                        if (ValidateHelper.validateUserArgs (userArgs))     throw ValidateHelper.validateUserArgs (userArgs);
                        
                        let     postUrl     = 'https://serko-engineering-exercises.azurewebsites.net/api/SignUp';
                        let     resobj      =
                        await HttpHelper.httpRequestA (postUrl, {email, password, preferredLanguage: language}, 1);
                        console.log (`- resobj: ${JSON.stringify (resobj)}`);
                        if (resobj.success) {
                                authctx.onSignup ();
                                props.history.push ('/welcome');
                        }
                }
                catch (err) {
                        // console.log (`- err: ${err}`);
                        HttpHelper.handleGenericErr (err, props);
                }
        }

        return (
                <Card className={classes.card}>
                        <div className={classes.logoView}>
                                <img src={serkoLogo} alt='could not find the logo' className={classes.logo} />
                                <p style={{color: 'grey'}}>Sign up with Serko</p>
                        </div>
                        <UniTextField placeholder={content.signup.email} id='email' required={true} type='Email' onChangeTxt={setEmail} />
                        <UniTextField placeholder={content.signup.password} id='pwd' required={true} type='Password' onChangeTxt={setPassword} />
                        <UniTextField placeholder={content.signup.password0} id='cfmPwd' required={true} type='Password' onChangeTxt={setPassword0} />
                        <LingoSelect id='lingo' placeholder={content.signup.preferredlang} type='Language' onChangeTxt={setLanguage} />						
                        <Button variant="contained" color="primary" className={classes.button} onClick={onSignUp}>
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

import React 				from 'react';
import Card 				from '@material-ui/core/Card';
import Button 				from '@material-ui/core/Button';
import { makeStyles } 		from '@material-ui/core/styles';
// import CardActions 		from '@material-ui/core/CardActions';
// import CardContent 		from '@material-ui/core/CardContent';

import UniTextField 		from '../Universal/UniTextField';
import UniSelect 			from '../Universal/UniSelect';

var 	serkoLogo      	= require ('../../Images/SerkoLogo.svg');  

function SignupCard () {
	
		var 	classes 	= useStyles ();
		
		let 	fillingConten 	= [
				{placeholder: 'Email *', id: 'email', required: true, type: 'Email'},
				{placeholder: 'Password *', id: 'pwd', required: true, type: 'Password'},
				{placeholder: 'Confirm Password *', id: 'cfmPwd', required: true, type: 'Password'},
		]
	
		return (
				<Card className={classes.card}>
						<div className={classes.logoView}>
								<img src={serkoLogo} alt='could not find the logo' className={classes.logo} />
								<p style={{color: 'grey'}}>Sign up with Serko</p>
						</div>
						{fillingConten.map ((item, index) => {
								return (<UniTextField placeholder={item.placeholder} id={item.id} required={item.required} key={index} type={item.type}/>);
						})}
						<UniSelect id='lingo' placeholder='Preferred Language *' type='Language'/>						
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

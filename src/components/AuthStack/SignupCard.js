import React 			from 'react';
import Card 			from '@material-ui/core/Card';
import { makeStyles } 	from '@material-ui/core/styles';
// import CardActions 		from '@material-ui/core/CardActions';
// import CardContent 		from '@material-ui/core/CardContent';

import UniTextField 		from '../Universal/UniTextField';

var 	serkoLogo      	= require ('../../Images/SerkoLogo.svg');  

function SignupCard () {
	
		var 	classes 	= useStyles ();
		
		let 	fillingConten 	= [
				{placeholder: 'Email *', id: 'email'},
				{placeholder: 'Password *', id: 'pwd'},
				{placeholder: 'Confirm Password *', id: 'cfmPwd'},
		]
	
		return (
				<Card className={classes.card}>
						<div className={classes.logoView}>
								<img src={serkoLogo} alt='could not find the logo' className={classes.logo} />
								<p style={{color: 'grey'}}>Sign up with Serko</p>
						</div>
						{fillingConten.map ((item, index) => {
								return (<UniTextField placeholder={item.placeholder} id={item.id}/>);
						})}
				</Card>
		);
}

var useStyles = makeStyles ({
		card: {
				maxWidth: 		375,
                marginLeft:     'auto',
                marginRight:    'auto',
				textAlign: 		'center',
                alignItems:     'center',
                justifyContent: 'center',
		},
		logo: {
				maxWidth: 		'60px',
				maxHeight: 		'60px', 
				
		},
		logoView: {
				margin: 		'60px 60px',
		}
});

export default SignupCard;

import React 			from 'react';
import Card 			from '@material-ui/core/Card';
import { makeStyles } 	from '@material-ui/core/styles';
import CardActions 		from '@material-ui/core/CardActions';
import CardContent 		from '@material-ui/core/CardContent';

var 	serkoLogo      	= require ('../../Images/SerkoLogo.svg');  

function SignupCard () {
	
		var 	classes 	= useStyles ();
	
		return (
				<Card className={classes.card}>
						<img src={serkoLogo} alt='could not find the logo' className={classes.logo} />
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
				margin: 		'60px 60px',
		}
});

export default SignupCard;

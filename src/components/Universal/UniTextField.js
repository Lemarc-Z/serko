import React, { useState } 		from 'react';
import TextField 				from '@material-ui/core/TextField';
import { makeStyles } 			from '@material-ui/core/styles';


function UniTextField (props) {
	
		var 	classes 	= useStyles ();
		
		let		{ placeholder,
				  id } 		= props;
	
		return (
				<TextField error={false} id={id} placeholder={placeholder} className={classes.textField} margin="normal" variant="filled" helperText="Some important text"/>
		);
}

var useStyles = makeStyles (theme =>({
	    textField: {
		      marginLeft: 		theme.spacing (1),
		      marginRight: 		theme.spacing (1),
	    },
}));

export default UniTextField;
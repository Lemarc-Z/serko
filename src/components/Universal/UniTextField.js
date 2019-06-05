import React, { useState } 		from 'react';
import TextField 				from '@material-ui/core/TextField';
import { makeStyles } 			from '@material-ui/core/styles';


function UniTextField (props) {
	
		var 	classes 	= useStyles ();
		
		let	  { placeholder,
				id } 		= props;
				  
		let   [ value, setValue ]             		= useState ('');
		let   [ error, setError ]             		= useState (false);
		let   [ helperText, setHelperText ] 		= useState ('');
				  
		function onChangeVal (event) {
				setValue (event.target.value);
				// console.log (`value ${JSON.stringify (event.target.value)}`);
		}
		
		function onBlurAndValidate () {
				// setError (true);
				// setHelperText ('hello world');
		}
		
	
		return (
				<TextField error={error} id={id} placeholder={placeholder} onBlur={onBlurAndValidate} onChange={onChangeVal} className={classes.textField} margin="normal" variant="standard" helperText={helperText} InputProps={{className: classes.input}}/>
		);
}

var useStyles = makeStyles (theme =>({
	    textField: {
				marginLeft: 		theme.spacing (1),
				marginRight: 		theme.spacing (1),
				width:  			'80%',	
	    },
	    input: {
	    		backgroundColor: 	"white",
	    }
}));

export default UniTextField;
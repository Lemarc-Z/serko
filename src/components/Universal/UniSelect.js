import React, { useState } 		from 'react';
import Select 					from '@material-ui/core/Select';
import MenuItem 				from '@material-ui/core/MenuItem';
import InputLabel 				from '@material-ui/core/InputLabel';
import FormControl 				from '@material-ui/core/FormControl';
import FormHelperText 			from '@material-ui/core/FormHelperText';
import { makeStyles } 			from '@material-ui/core/styles';


function UniSelect (props) {
	
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
		
		console.log (`- value :${value}`);

		return (
				<FormControl className={classes.textField}>
						<InputLabel>{placeholder}</InputLabel>
						<Select className={classes.select} error={error} id={id} value={value} onChange={onChangeVal} onBlur={onBlurAndValidate} variant="standard" MenuProps={{getContentAnchorEl: null, anchorOrigin: { vertical: "bottom", horizontal: "left"}}}>
								<MenuItem value="olivier">Olivier</MenuItem>
								<MenuItem value="kevin">Kevin</MenuItem>
						</Select>
						<FormHelperText error={error}>{helperText}</FormHelperText>
				</FormControl>
		);
}

var useStyles = makeStyles (theme =>({
	    textField: {
				marginLeft: 		theme.spacing (1),
				marginRight: 		theme.spacing (1),
				width:  			'80%',	
	    },
	    select: {
				textAlign: 			'left',
	    },
}));

export default UniSelect;
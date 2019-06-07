import React, { useState, useEffect } 	from 'react';
import Select 							from '@material-ui/core/Select';
import MenuItem 						from '@material-ui/core/MenuItem';
import InputLabel 						from '@material-ui/core/InputLabel';
import FormControl 						from '@material-ui/core/FormControl';
import FormHelperText 					from '@material-ui/core/FormHelperText';
import { makeStyles } 					from '@material-ui/core/styles';
// helpers
import HttpHelper      					from '../Helpers/HttpHelper';
import ValidateHelper      				from '../Helpers/ValidateHelper';

function LingoSelect (props) {
	
		var 	classes 	= useStyles ();
		
		let	  { placeholder,
				type,
				onChangeTxt,
				id } 		= props;
				  
		let   [ value, setValue ]             		= useState ('');
		let   [ error, setError ]             		= useState (false);
		let   [ helperText, setHelperText ] 		= useState ('');
		let   [ languages, setLanguages ] 			= useState ('');
		
		useEffect (() => {
				onGetLanguages ();
		}, []);
			  
		function onChangeVal (event) {
				setValue (event.target.value);
				onChangeTxt (event.target.value);
		}
		
		function onBlurAndValidate () {
	            let 	retErrMsg 		= ValidateHelper.checkTypeAndValidate (type, value);	
				if (retErrMsg) {
						setError (true);
						setHelperText (retErrMsg);
				}
				else {
						setError (false);
						setHelperText ('');
				}
		}
		
        async function onGetLanguages () {
                try {

                        let     getUrl      = 'https://serko-engineering-exercises.azurewebsites.net/api/Languages';
                        let     resobj      =
                        await HttpHelper.httpRequestA (getUrl, {}, 0);
                        console.log (`- resobj: ${JSON.stringify (resobj)}`);
						setLanguages (resobj.languages);

                }
                catch (err) {
                        console.log (`- err: ${err}`);
                        HttpHelper.handleGenericErr (err, props);
                }
        }
		
		console.log (`- value :${value}`);

		return (
				<FormControl className={classes.textField}>
						<InputLabel>{placeholder}</InputLabel>
						<Select className={classes.select} error={error} id={id} value={value} onChange={onChangeVal} onBlur={onBlurAndValidate} variant="standard" MenuProps={{getContentAnchorEl: null, anchorOrigin: { vertical: "bottom", horizontal: "left"}}}>
								{languages ? 
								Object.keys (languages).map ((key, index)=> {return (<MenuItem key={index} value={key}>{languages[key]}</MenuItem>)})
								: null}
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

export default LingoSelect;
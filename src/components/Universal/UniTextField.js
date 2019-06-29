import React, { useState } 		from 'react';
import TextField 				from '@material-ui/core/TextField';
import { makeStyles } 			from '@material-ui/core/styles';
// helpers
import ValidateHelper from '../Helpers/ValidateHelper';


function UniTextField(props) {
  const 	classes 	= useStyles();

  const {
    placeholder,
    id,
    type,
    onChangeTxt,
    ...rest
  } 		= props;

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] 		= useState('');

  function onChangeVal(event) {
    setValue(event.target.value);
    onChangeTxt(event.target.value);
    // console.log (`value ${JSON.stringify (event.target.value)}`);
  }

  function onBlurAndValidate() {
    const 	retErrMsg 		= ValidateHelper.checkTypeAndValidate(type, value);
    if (retErrMsg) {
      setError(true);
      setHelperText(retErrMsg);
    } else {
      setError(false);
      setHelperText('');
    }
  }


  return (
    <TextField type={type} error={error} id={id} placeholder={placeholder} onBlur={onBlurAndValidate} onChange={onChangeVal} className={classes.textField} margin="normal" variant="standard" helperText={helperText} InputProps={{ className: classes.input }} {...rest} />
  );
}

var useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
  },
}));

export default UniTextField;

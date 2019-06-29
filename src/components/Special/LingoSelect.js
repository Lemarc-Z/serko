import React, { useState, useEffect } 	from 'react';
import Select 							from '@material-ui/core/Select';
import MenuItem 						from '@material-ui/core/MenuItem';
import InputLabel 						from '@material-ui/core/InputLabel';
import FormControl 						from '@material-ui/core/FormControl';
import FormHelperText 					from '@material-ui/core/FormHelperText';
import { makeStyles } 					from '@material-ui/core/styles';
// helpers
import HttpHelper from '../Helpers/HttpHelper';
import ValidateHelper from '../Helpers/ValidateHelper';

function LingoSelect(props) {
  const 	classes 	= useStyles();

  const {
    placeholder,
    type,
    onChangeTxt,
    id,
  } 		= props;

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] 		= useState('');
  const [languages, setLanguages] 			= useState('');

  useEffect(() => {
    onGetLanguages();
  }, []);

  function onChangeVal(event) {
    setValue(event.target.value);
    onChangeTxt(event.target.value);
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

  async function onGetLanguages() {
    try {
      const getUrl = 'https://serko-engineering-exercises.azurewebsites.net/api/Languages';
      const resobj = await HttpHelper.httpRequestA(getUrl, {}, 0);
      // console.log (`- resobj: ${JSON.stringify (resobj)}`);
      setLanguages(resobj.languages);
    } catch (err) {
      // console.log (`- err: ${err}`);
      HttpHelper.handleGenericErr(err, props);
    }
  }

  return (
    <FormControl className={classes.textField}>
      <InputLabel>{placeholder}</InputLabel>
      <Select className={classes.select} error={error} id={id} value={value} onChange={onChangeVal} onBlur={onBlurAndValidate} variant="standard" MenuProps={{ getContentAnchorEl: null, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } }}>
        {languages
          ? Object.keys(languages).map((key, index) => (<MenuItem key={index} value={key}>{languages[key]}</MenuItem>))
          : null}
      </Select>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
}

var useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80%',
  },
  select: {
    textAlign: 'left',
  },
}));

export default LingoSelect;

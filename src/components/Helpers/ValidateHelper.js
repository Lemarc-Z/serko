'use strict';

var validateUserArgs      = function (args)
{	
        for (let obj of args) {
                let   { val,
                        errmsg,
                        type,
                        chktype,
                        func,
						regex }             = obj;

                errmsg  = errmsg || 'Invalid value';

                switch (chktype) {
                        case 'required': {
                                if (typeof val === 'undefined' || (typeof val === 'string' && val.length === 0))    return errmsg;
                                break;
                        }
                        case 'length': {
                                if (!func (val.toString ().length))                 return errmsg;
                                break;
                        }
                        case 'regex': {
                                if (!regex.test (val))                              return errmsg;
                                break;
                        }
                        default:
                                return errmsg;
                }
        }
};

var checkTypeAndValidate 	= function (type, val)
{
		let 	userArgs;
	    switch (type) {
	            case 'password': {
					    userArgs     = [
					            {val: val, errmsg: `${type} is required`, chktype: 'required'},
								{val: val, errmsg: `${type} must contain number`, chktype: 'regex', regex: /[0-9]/},
								{val: val, errmsg: `${type} must contain lowercase`, chktype: 'regex', regex: /[a-z]/},
								{val: val, errmsg: `${type} must contain uppercase`, chktype: 'regex', regex: /[A-Z]/},
					            {val: val, errmsg: `${type} length less than 5`, chktype: 'length', func: len => len > 5},
					    ];
						return validateUserArgs (userArgs);
	            }
	            default:
	                    return false;
	    }
}

export default {
		checkTypeAndValidate,
};

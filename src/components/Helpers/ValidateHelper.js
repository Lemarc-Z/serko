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
					            {val: val, errmsg: '手机号不能为空', chktype: 'required'},
								{val: val, errmsg: '手机号必须为数字', chktype: 'regex', regex: /[0-9]/},
								{val: val, errmsg: 'Lowercase', chktype: 'regex', regex: /[a-z]/},
								{val: val, errmsg: 'Uppercase', chktype: 'regex', regex: /[A-Z]/},
					            {val: val, errmsg: '手机号长度错误', chktype: 'length', func: len => len > 5},
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

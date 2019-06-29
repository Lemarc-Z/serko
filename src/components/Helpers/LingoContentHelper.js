
const contentByLang = function () {
  const lang = getBrowserLang();

  // could improve to UseContext
  const content = {
    en: {
      signup: {
        email: 'Email *',
        password: 'Password *',
        password0: 'Confirm Password *',
        preferredlang: 'Preferred Language *',
      },
    },
    zh: {
      signup: {
        email: '邮箱 *',
        password: '密码 *',
        password0: '确认密码 *',
        preferredlang: '语言偏好 *',
      },
    },
  };

  return content[lang];
};


var getBrowserLang = function () {
  // https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
  const lang = (navigator.languages && navigator.languages[0]) // Chrome / Firefox
                        || navigator.language // All browsers
                        || navigator.userLanguage || navigator.systemLanguage || navigator.browserLanguage; // IE <= 10

  // only support EN & ZH yet
  if (lang.toLowerCase().indexOf('en') !== -1) return 'en';
  if (lang.toLowerCase().indexOf('zh') !== -1) return 'zh';
};


export default {
  contentByLang,
  // getBrowserLang,
};

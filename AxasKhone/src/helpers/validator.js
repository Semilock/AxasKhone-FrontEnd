import pass_validator from 'password-validator';

const schema = {
  email: {
    presence: 'ایمیل را وارد کنید',
    wrong: 'ایمیل صحیح وارد کنید'
  },
  password: {
    min: 6,
    level: 'low',
    presence: 'ایمیل را وارد کنید',
    wrong: 'پسورد ضعیف است'
  }
};

const email_validator = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validator = (fieldName, value) => {
  switch (fieldName) {
    case 'email':
      if (value.trim() === '') {
        return schema[`${fieldName}`].presence;
      } else {
        if (!email_validator(value)) {
          return schema[`${fieldName}`].wrong;
        }
      }
      break;
    case 'password':
      if (value.trim() === '') {
        return schema[`${fieldName}`].presence;
      } else {
        let pValidator = new pass_validator();
        pValidator.is().min(Number(schema[`${fieldName}`].min));
        if (schema[`${fieldName}`].level === 'high') {
          pValidator
            .has()
            .uppercase()
            .has()
            .lowercase()
            .has()
            .digits();
        }
        if (!pValidator.validate(value)) {
          return schema[`${fieldName}`].wrong;
        }
      }
      break;

    default:
      break;
  }
};

export default validator;

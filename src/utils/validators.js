import validator from 'validator';

const allowedCountries = ['poland', 'polska'];

export const validators = {
  name: value => /([a-zA-Z]+\s?\b){2,}/.test(value),
  email: value => validator.isEmail(value),
  phone: value => /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/.test(value),
  country: value => allowedCountries.includes(value.trim().toLowerCase()),
  address: value => {
    const splittedValue = value.trim().split(' ');
    let maybeValid = false;
    if(splittedValue.length > 1) {
      splittedValue.forEach(part => {
        const isNumberInPart = [...part].some(ch => /\d/.test(ch));
        if(isNumberInPart) {
          maybeValid = true;
        }
      })
    }
    return maybeValid;
  },
  postCode: value => validator.isPostalCode(value.trim(), 'PL'),
  city: value => value.trim().length > 1,
};

export const validateOrderForm = ({ name, email, phone, country, address, postCode, city }) => {
  const options = {
    name,
    email,
    phone,
    country,
    address,
    postCode,
    city,
  };
  const errors = [];
  Object.keys(validators).forEach(option => {
    if( !validators[option](options[option])) {
      errors.push(option);
    }
  });

  return errors;
}
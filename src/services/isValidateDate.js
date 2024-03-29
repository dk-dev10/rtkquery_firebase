import { intlFormat, lightFormat } from 'date-fns';

export function isDate(date) {
  let res = new Date(date);
  if (Object.prototype.toString.call(res) === '[object Date]') {
    if (isNaN(res.getTime())) {
      return;
    } else {
      return res;
    }
  }
}

export const isValidDate = (date) => {
  return lightFormat(isDate(date) ? isDate(date) : new Date(), 'dd.MM.yyyy');
};
export const isValidDate2 = (date) => {
  return intlFormat(isDate(date) ? date : new Date(), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

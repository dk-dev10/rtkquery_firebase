export const sliceStr = (str, num = 20) => {
  if (str?.length >= num) {
    return `${str.substring(0, num)}...`;
  }
  return str;
};

export const objectToArray = obj => {
  return Object.keys(obj).map(key => {
    return { ...obj[key], key };
  });
};

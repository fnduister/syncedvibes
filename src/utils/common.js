export const objectToArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    return { ...obj[key] };
  });
};

export const objectToArrayWithKey = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    return { key, value };
  });
};

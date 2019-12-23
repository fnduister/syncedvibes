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

// 0: {key: "-LuU_jzqHDHXuvQpQ3J9", value: {…}}
// 1: {key: "-LuUZFccleUkK2_hjF9v", value: {…}}
// 2: {key: "-LuUXPSvEfc7sdRB9YaV", value: {…}}
// 3: {key: "-LuLQx-_KF3d9avXudXt", value: {…}}
// 4: {key: "-LuLLwsL1Lro336UEV3C", value: {…}}
// 5: {key: "-LuLL0eRrmSFfZjzptoW", value: {…}}
// 6: {key: "-LuLJdFxmQBA2kfL5-Pc", value: {…}}
// 7: {key: "-LuBFv18iSXsZWc4TS6O", value: {…}}
// 8: {key: "-LuBF-yySAwDysg_0Jyv", value: {…}}
// 9: {key: "-LuBE-KHn0jhfvH6dgiJ", value: {…}}
// 10: {key: "-LuBCjXnEeRRYsULWySE", value: {…}}
// 11: {key: "-LuBBvLo9mk_9uNq6PKq", value: {…}}
// 12: {key: "-LuBAVEdrRyILcIFarxY", value: {…}}
// 13: {key: "-Lu63Q6PBoS56Cm0Jgm3", value: {…}}
// 14: {key: "-Lu62hjMGwj89jaZtPHG", value: {…}}
// 15: {key: "-LtvGUXnD9aSuuy8AqBM", value: {…}}
// 16: {key: "-LtvFaVkrgP2CzTJNiP2", value: {…}}
// 17: {key: "-LtvE2ujWIXPDt8Qa6xA", value: {…}}
// 18: {key: "-LsKlYRqfOOunR-dZOfj", value: {…}
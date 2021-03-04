export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num,
  };
};

export const sign_in = () => {
  return {
    type: 'SIGN_IN',
  };
};

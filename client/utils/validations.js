const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const email = value => (
  value && !(emailReg.test(value)) ? 'Invalid email address' : undefined
);

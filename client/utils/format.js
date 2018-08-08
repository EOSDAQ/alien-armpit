const initialToFixedConfig = {
  appendZero: true,
};

export const toFixed = (place, _value, config = initialToFixedConfig) => {
  let value = _value.toString();
  value = value.replace(/[^0-9.]+/g, ''); // erase non numbers and point.

  let [int, decimal] = value.split('.');
  const parsedInt = parseInt(int, 10);
  int = (parsedInt || parsedInt === 0) ? parsedInt : (config.appendZero ? '0' : '');
  
  if (decimal) {
    decimal = decimal.slice(0, place);
  }

  if (config.appendZero) {
    const zeros = new Array(place).fill(0).join('');
    decimal = decimal ? decimal + zeros.slice(decimal.length) : zeros;
  }

  if (decimal === undefined) {
    return int;
  }

  return `${int}.${decimal}`;
};

export const hello = '';

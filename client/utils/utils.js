export const replaceAndBuildArray = (source, condition, replacement) => {
  let result;

  if (typeof source === 'string') {
    result = source.split(condition);
    result.splice(result.length - 1, 0, replacement);
  }

  if (typeof source === 'object') {
    result = source.slice(0);
    const target = result[result.length - 1];
    const splitted = target.split(condition);
    splitted.splice(splitted.length - 1, 0, replacement);
    result.splice(result.length - 1, 1);
    result = result.concat(splitted);
  }

  return result;
};

export const buildActionCacheKey = (action) => {
  const { type, payload } = action;
  return [
    type,
    payload && JSON.stringify(payload),
  ].filter(Boolean).join(':');
}

export const getValueFromStrKey = (obj, str) => {
  const keys = str.split('.');
  let value = obj;
  let failed;
  keys.map(key => {
    if (typeof value[key] === 'undefined') {
      failed = true;
      return;
    }
    value = value[key];
  });
  if (failed) {
    return undefined;
  }
  return value;
};

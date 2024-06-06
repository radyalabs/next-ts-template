const hasEmpty = (data: Record<string, unknown>) => {
  for (const key in data) {
    if (key) {
      const keyData = data[key];
      if (
        keyData === null
        || (typeof keyData === 'string' && keyData === '')
        || (Array.isArray(data) && data.length === 0)
      ) {
        return true;
      }
    }
  }
  return false;
};

export default hasEmpty;

const autofitColumns = <T extends Record<string, unknown>>(
  json: T[], header: string[] = [],
) => {
  if (json.length > 0) {
    const jsonKeys = header || Object.keys(json[0]);

    const objectMaxLength: number[] = [];
    for (let i = 0; i < json.length; i++) {
      const value = json[i];
      for (let j = 0; j < jsonKeys.length; j++) {
        if (typeof value[jsonKeys[j]] === 'number') {
          objectMaxLength[j] = 10;
        } else {
          const l = value[jsonKeys[j]] ? String(value[jsonKeys[j]]).length : 0;
          objectMaxLength[j] = objectMaxLength[j] >= l
            ? objectMaxLength[j]
            : l;
        }
      }

      const key = jsonKeys;
      for (let j = 0; j < key.length; j++) {
        objectMaxLength[j] = objectMaxLength[j] >= key[j].length
          ? objectMaxLength[j]
          : key[j].length;
      }
    }
    return objectMaxLength.map((w) => ({ width: w }));
  }
  const longestHeader = header.reduce(
    (a, b) => (a.length > b.length ? a : b),
  ).length;
  return header.map(() => ({ width: longestHeader }));
};

export default autofitColumns;

const createQueryParams = (query: Record<string, unknown>) => {
  const params: URLSearchParams = new URLSearchParams();
  for (const key of Object.keys(query)) {
    if (query[key]) {
      if (query[key] instanceof Array) {
        (query[key] as unknown[]).forEach((item) => {
          params.append(`${key.toString()}[]`, String(item));
        });
      } else {
        params.append(key.toString(), String(query[key]));
      }
    }
  }
  return String(params);
};

export default createQueryParams;

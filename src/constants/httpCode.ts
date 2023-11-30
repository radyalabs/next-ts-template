const HTTP_CODE = {
  success: 200,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
} as const;

export default HTTP_CODE;

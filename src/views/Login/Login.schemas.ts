import { z } from 'zod';

import { FIELD_MESSAGE } from '@/constants/errorMessages';

const { REQUIRED } = FIELD_MESSAGE;

const loginSchema = z.object({
  username: z.string().min(1, { message: REQUIRED('Username') }),
  password: z.string().min(1, { message: REQUIRED('Password') }),
});

export default loginSchema;

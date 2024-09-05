import type { z } from 'zod';

import type loginSchema from './Login.schemas';

export type LoginSchema = z.infer<typeof loginSchema>;

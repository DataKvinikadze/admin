import { z } from 'zod';

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name must not be empty')
    .max(50, 'First name is too long'),

  lastName: z
    .string()
    .min(1, 'Last name must not be empty')
    .max(50, 'Last name is too long'),

  email: z.string().email('Invalid email address'),

  password: z.string().min(6, 'Password must be at least 6 characters'),
});

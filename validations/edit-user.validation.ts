import { z } from 'zod';

export const editProfileSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) =>
      (!data.newPassword && !data.confirmPassword) ||
      (data.newPassword && data.confirmPassword === data.newPassword),
    {
      message: 'Passwords must match',
      path: ['confirmPassword'],
    }
  );

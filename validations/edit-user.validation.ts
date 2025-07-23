import { z } from 'zod';

export const editProfileSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address').optional(),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // If any password is filled, require all three
    const anyPasswordFieldFilled =
      data.currentPassword || data.newPassword || data.confirmPassword;

    if (anyPasswordFieldFilled) {
      if (!data.currentPassword) {
        ctx.addIssue({
          code: 'custom',
          message: 'Current password is required',
          path: ['currentPassword'],
        });
      }
      if (!data.newPassword) {
        ctx.addIssue({
          code: 'custom',
          message: 'New password is required',
          path: ['newPassword'],
        });
      }
      if (!data.confirmPassword) {
        ctx.addIssue({
          code: 'custom',
          message: 'Please confirm your new password',
          path: ['confirmPassword'],
        });
      } else if (data.newPassword !== data.confirmPassword) {
        ctx.addIssue({
          code: 'custom',
          message: 'Passwords must match',
          path: ['confirmPassword'],
        });
      }
    }
  });

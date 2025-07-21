import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
});

export default forgotPasswordSchema;

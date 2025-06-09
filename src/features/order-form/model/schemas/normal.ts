import { z } from 'zod';

export const normalOrderSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number (E.164 format)'),
  orderId: z.number().positive('OrderId must be positive'),
});

export type NormalOrderSchemaType = z.infer<typeof normalOrderSchema>;

import { z } from 'zod';

export const normalOrderSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^\+?[0-9]{10,15}$/, 'Invalid phone number'),
  orderId: z.number().positive('OrderId must be positive'),
});

export type NormalOrderSchemaType = z.infer<typeof normalOrderSchema>;

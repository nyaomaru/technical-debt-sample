import { z } from 'zod';
import { specialOrderSchema } from './special';

export const adminOrderSchema = specialOrderSchema.extend({
  remarks: z
    .string()
    .min(1, 'Remarks is required')
    .max(500, 'Remarks cannot exceed 500 characters'),
});

export type AdminOrderSchemaType = z.infer<typeof adminOrderSchema>;

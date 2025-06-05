import { z } from 'zod';
import { specialOrderSchema } from './special';

export const adminOrderSchema = specialOrderSchema.extend({
  remarks: z.string().max(500, 'Remarks cannot exceed 500 characters'),
});

export type AdminOrderSchemaType = z.infer<typeof adminOrderSchema>;

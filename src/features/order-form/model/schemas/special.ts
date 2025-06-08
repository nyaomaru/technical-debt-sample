import { z } from 'zod';
import { normalOrderSchema } from './normal';

export const specialOrderSchema = normalOrderSchema.extend({
  discountCode: z.number().optional(),
});

export type SpecialOrderSchemaType = z.infer<typeof specialOrderSchema>;

import { z } from "zod";
import { site } from "@/content/site";

export const contactSubmissionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, site.contact.validation.name)
    .max(120, site.contact.validation.name),
  email: z
    .string()
    .trim()
    .email(site.contact.validation.email)
    .max(254, site.contact.validation.email),
  services: z.array(z.enum(site.contact.servicesOptions)),
  projectSize: z
    .string()
    .optional()
    .refine(
      (value) =>
        !value ||
        site.contact.projectSizeOptions.some((option) => option === value),
      site.contact.validation.projectSize,
    ),
  details: z
    .string()
    .trim()
    .min(10, site.contact.validation.details)
    .max(5000, site.contact.validation.details),
  website: z.string().max(500).optional(),
});

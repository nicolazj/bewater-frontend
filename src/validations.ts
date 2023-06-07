import { z } from "zod";

export const validationSchema = {
  email: z.string().email(),

  fullName: z.string().min(2, { message: "At least 2 characters" }),
  // general text field
  text: z.string().min(2, { message: "At least 2 characters" }),
  date: z.string().regex(/\d{4}-\d{2}-\d{2}/, { message: "Please pick a date" }),
};

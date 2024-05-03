import * as z from "zod";

export const SearchSchema = z.object({
  location: z
    .string()
    .min(1, {
      message: "Location is required.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "Location can only contain alphabets.",
    }),
});

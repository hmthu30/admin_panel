import { z } from "zod";

// Define a utility to check for emoji
const containsEmoji = (str: string) => /\p{Emoji}/u.test(str);

const industrySchema = z.object({
  industryCode: z
    .string()
    .min(5, { message: "Industry Code must be at least 5 characters long." })
    .max(50, { message: "Industry Code must not exceed 50 characters." })
    .regex(/^[a-zA-Z\s]*$/, {
      message: "Industry Code must only contain English letters and spaces.",
    })
    .refine((value) => !containsEmoji(value), {
      message: "Industry Code must not contain emojis.",
    }),
  industryName: z
    .string()
    .min(5, { message: "Industry Name must be at least 5 characters long." })
    .max(300, { message: "Industry Name must not exceed 300 characters." })
    .refine((value) => !containsEmoji(value), {
      message: "Industry Name must not contain emojis.",
    }),
  status: z.enum(["Active", "Inactive"]).default("Active"),
});

// Example validation
const inputData = {
  industryCode: "Tech123",
  industryName: "Technology Services",
  status: "Active",
};

const result = industrySchema.safeParse(inputData);

if (!result.success) {
  console.error(result.error.format()); // Displays detailed validation errors
} else {
  console.log(result.data); // Validated data
}

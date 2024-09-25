import {z} from 'zod';

export const usernameValidation =
z.string()
.min(2, "Username must be atleast 2 Characters")
.max(20, "Username must be atmost 20 Characters")
.regex(/^[a-zA-Z0-9_]*$/, "Username can only contain letters, numbers and underscores");

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be atleast 6 Characters"}),
    verifyCode: z.string().min(6),
    verifyCodeExpires: z.date(),
    isVerified: z.boolean().default(false),
    isAcceptingMessages: z.boolean().default(true),
    messages: z.array(z.object({
        message: z.string(),
        from: z.string(),
        to: z.string(),
        date: z.date()
    }))
})

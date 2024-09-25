import {z} from 'zod';

export const signInSchema = z.object({
    identifier: z.string().min(2, "Identifier must be atleast 2 Characters"),
    password: z.string().min(6, {message: "Password must be atleast 6 Characters"})
})

import {z} from 'zod';

export const signupInput = z.object({
    email: z.string().email(),
    password : z.string(),
    name : z.string().min(3),
})

export type SignupType = z.infer<typeof signupInput>;


export const signinInput = z.object({
    email: z.string().email(),
    password : z.string()
})

export type SigninType = z.infer<typeof signinInput>;


export const  createPostInput = z.object({
    title : z.string(),
    content : z.string(),
    published : z.boolean().optional()
});

export type CreatePostType = z.infer<typeof createPostInput>;

export const  updatePostInput = z.object({
    title : z.string(),
    content : z.string(),
    published : z.boolean().optional()
});

export type UpdatePostType = z.infer<typeof updatePostInput>;

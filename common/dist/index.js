"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    name: zod_1.z.string().optional()
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.createPostInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean().optional()
});
exports.updatePostInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean().optional()
});

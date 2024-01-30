import { createMockPost, createMockUser } from "@/mocks/db";

export type User = ReturnType<typeof createMockUser>;

export type Post = ReturnType<typeof createMockPost> & { author: User };

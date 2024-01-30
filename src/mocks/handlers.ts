import { HttpResponse, http } from "msw";
import { db } from "./db";

export const handlers = [
  ...db.user.toHandlers("rest"),
  ...db.post.toHandlers("rest"),
  http.get("/users/:userId/friends", (request) => {
    const userId = request.params.userId as string;
    const currentUser = db.user.findFirst({
      where: { id: { equals: userId } },
    });

    return HttpResponse.json(currentUser?.friends);
  }),
  http.get("/users/:userId/friends/posts", (request) => {
    const userId = request.params.userId as string;
    const currentUser = db.user.findFirst({
      where: { id: { equals: userId } },
    });
    const friendIds = currentUser?.friends.map((friend) => friend.id);

    const posts = db.post.findMany({
      where: {
        author: {
          id: {
            in: friendIds,
          },
        },
      },
    });

    return HttpResponse.json(posts);
  }),
];

import { QUERY_KEYS } from "@/constants/queryKeys";
import { Post, User } from "@/types";
import { useQuery } from "react-query";

export const useGetUserById = (id: string) => {
  return useQuery<User>([QUERY_KEYS.USERS, id], () =>
    fetch(`/users/${id}`).then((res) => res.json())
  );
};

export const useGetCurrentUser = () => {
  return useGetUserById("1");
};

export const useGetFriends = (userId?: string) => {
  return useQuery<User[]>(
    [QUERY_KEYS.USERS, userId, "friends"],
    () => fetch(`/users/${userId}/friends`).then((res) => res.json()),
    { enabled: !!userId }
  );
};

export const useGetPosts = () => {
  const { data: currentUser } = useGetCurrentUser();
  const userId = currentUser?.id;
  return useQuery<Post[]>(
    [QUERY_KEYS.POSTS, userId],
    () => fetch(`/users/${userId}/friends/posts`).then((res) => res.json()),
    { enabled: !!userId }
  );
};

export const useGetPostById = (postId?: string) => {
  return useQuery<Post>(
    [QUERY_KEYS.POSTS, postId],
    () => fetch(`/posts/${postId}`).then((res) => res.json()),
    { enabled: !!postId }
  );
};

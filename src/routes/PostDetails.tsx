import { Post } from "@/components/Post";
import { useGetPostById } from "@/hooks";
import { useParams } from "react-router-dom";

export const PostDetails = () => {
  const routeParams = useParams();
  const postId = routeParams.postId;
  const { data: post } = useGetPostById(postId);
  if (!post) return null;

  return <Post post={post} />;
};

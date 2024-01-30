import { Post } from "@/components/Post";
import { useGetPosts } from "@/hooks";

export const Timeline = () => {
  const { data: posts = [] } = useGetPosts();

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} isPreview />
      ))}
    </ul>
  );
};

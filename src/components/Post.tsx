import { Post as PostEntity } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

interface PostProps {
  post: PostEntity;
  isPreview?: boolean;
}

export const Post = ({ post, isPreview }: PostProps) => {
  const [likes, setLikes] = useState<{ [postId: string]: number }>({});
  const handleLike = (postId: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const fullName = `${post.author.firstName} ${post.author.lastName}`;

  return (
    <li className="flex flex-col mt-6 w-4/12">
      <div className="text-xs">{fullName}</div>
      <div className={cx({ truncate: isPreview })}>{post.content}</div>
      <div className="flex items-center">
        <button
          className="btn btn-outline btn-primary"
          onClick={() => handleLike(post.id)}
        >
          Like
        </button>
        <span className="ml-2">{likes[post.id] || 0}</span>
        {isPreview && (
          <div className="ml-4">
            <Link to={`/post/${post.id}`} className="btn btn-outline">
              View Post
            </Link>
          </div>
        )}
      </div>
    </li>
  );
};

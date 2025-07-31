import { useParams } from "react-router-dom";
import posts from "../data/Posts.js";

const SinglePost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="item-box">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;

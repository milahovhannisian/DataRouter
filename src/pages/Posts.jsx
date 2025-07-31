import { Link } from "react-router-dom";
import posts from "../data/Posts.js";

const Posts = () => (
  <div>
    <h2>Posts</h2>
    {posts.map((post) => (
      <div key={post.id} className="item-box">
        <h4>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h4>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

export default Posts;


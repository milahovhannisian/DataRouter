import comments from "../data/Comments.js";

const Comments = () => (
  <div>
    <h2>Comments</h2>
    {comments.map((comment) => (
      <div key={comment.id} className="item-box">
        <strong>{comment.name}</strong>
        <p>{comment.body}</p>
      </div>
    ))}
  </div>
);

export default Comments;

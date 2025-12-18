import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Post Details</h2>
      <p>You are viewing post ID: {postId}</p>
    </div>
  );
}

export default Post;

import { Link, Outlet } from "react-router-dom";

function Blog() {
  // Sample list of posts
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "React Router Nested Routes" },
    { id: 3, title: "Using React.memo" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default Blog;

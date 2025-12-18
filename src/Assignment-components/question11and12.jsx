import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
    setSubmittedPassword(password);
  };
  

  return (
    <div className="m-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-black p-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black p-2"
        />

        <button type="submit" className="border border-black p-2 bg-gray-200">
          Login
        </button>
      </form>

      {/* Show only after submit */}
      {submittedUsername && (
        <p className="mt-4">
          Logged in as: <strong>{submittedUsername}</strong>
        </p>
      )}
      {submittedPassword && (
        <p className="mt-4">
          Password: <strong>{submittedPassword}</strong>
        </p>
      )}
    </div>
  );
}

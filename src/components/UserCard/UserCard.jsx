import { useState, useEffect } from "react";
import { Router, Link } from "react-router-dom";

export default function UserCard({ user }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const repositoriesArray = await fetch(user?.repos_url);
    const repoJson = await repositoriesArray.json();

    if (user) {
      setRepositories(repoJson);
    }
  }, []);

  console.log(repositories);
  const id = "asdfgfh";

  return (
    <Link to={`/users/${user?.id}`} className="github__user-card">
      <img style={{ width: "50px" }} src={user?.avatar_url} alt="avatar" />
      <p>{user?.login}</p>
      <span>{user?.repositories?.length}</span>
    </Link>
  );
}

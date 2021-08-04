import { useState } from "react";
import UserCard from "../UserCard/UserCard";

import "./search-users.css";

const SearchUsers = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const users = await fetch(`https://api.github.com/users`);
    const usersArray = await users.json();

    if (usersArray) {
      setData(usersArray);
    }
  };

  console.log(data);

  return (
    <>
      <div className="github__main">
        <div className="github__search">
          <h1>GitHub Searcher</h1>
          <input
            className="github__input"
            placeholder="Search for Users"
            type="text"
            value={username}
            onChange={onChangeHandler}
          />
          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            Search
          </button>
          {data?.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </>
  );
};
export default SearchUsers;

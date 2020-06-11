import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"
  );
  return response.data;
}

function Users() {
  const [userId, setuserId] = useState(null);
  const { data: users, error, isLoading, reload, run } = useAsync({
    // promiseFn: getUsers, // 시작하자마자 호출
    deferFn: getUsers, // run 하면 호출
  });

  if (isLoading) return <div>Now Loading...</div>;
  if (error) return <div>Error Occurred!! </div>;
  if (!users) return <button onClick={run}>Loading</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setuserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>reload</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;

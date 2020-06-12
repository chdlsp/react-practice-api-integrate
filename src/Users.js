import React, { useState } from "react";
import User from "./User";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";

function Users() {
  const [userId, setuserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>Now Loading...</div>;
  if (error) return <div>Error Occurred!! </div>;
  if (!users) return <button onClick={fetchData}>Loading</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setuserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>reload</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;

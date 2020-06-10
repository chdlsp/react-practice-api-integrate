import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducer";

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    console.log("Loadiing...");
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      dispatch({ type: "SUCCESS", data: response.data });
      console.log("Success...");
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
      console.log("Error...");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state;
  if (loading) return <div>Now Loading...</div>;
  if (error) return <div>Error Occurred!! </div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>reload</button>
    </>
  );
}

export default Users;

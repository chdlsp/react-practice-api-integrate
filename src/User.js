import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getuser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return response.data;
}

function User({ id }) {
  const [state] = useAsync(() => getuser(id), [id]);
  const { loading, data: user, error } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div> Error Occurred! </div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <b>Email: </b>
      <p>{user.email}</p>
    </div>
  );
}

export default User;

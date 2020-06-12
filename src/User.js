import React, { useEffect } from "react";
import { getUser, useUsersState, useUsersDispatch } from "./UsersContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);
  const { loading, data: user, error } = state.user;

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

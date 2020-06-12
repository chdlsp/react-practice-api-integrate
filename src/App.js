import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import { UsersProvider } from "./UsersContext";

function App() {
  return (
    <UsersProvider>
      <Users></Users>
    </UsersProvider>
  );
}

export default App;

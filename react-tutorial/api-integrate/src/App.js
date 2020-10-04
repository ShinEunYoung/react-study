import React from "react";
import "./App.css";
import Users from "./useContext/Users";
import { UsersProvider } from "./useContext/RefactUsersContext";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;

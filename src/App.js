import React, { useState } from "react";
import CreateUser from "./components/CreateUser";
import UserTable from "./components/UserTable";
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "kajal sinha", email: "kajal.sinha@yahoo.com" },
    { id: 2, name: "Manjeet singh", email: "manjeetsingh@gmail.com" },
  ]);

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", email: "" });

  // Create user
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Update user
  const editUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>CRUD App</h1>
      </div>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <CreateUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <CreateUser addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;

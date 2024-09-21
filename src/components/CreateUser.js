import React, { useState, useEffect } from "react";
import './CreateUser.css'; 

const CreateUser = (props) => {
  const initialFormState = { id: null, name: "", email: "" };
  const [user, setUser] = useState(initialFormState);

  useEffect(() => {
    if (props.editing) {
      setUser(props.currentUser);
    }
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.email) return;

    if (props.editing) {
      props.updateUser(user.id, user);
    } else {
      props.addUser(user);
    }
    setUser(initialFormState); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Enter name"/>
      <label>Email</label>
      <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter email"/>
      <button className="submit-btn">
        {props.editing ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default CreateUser;

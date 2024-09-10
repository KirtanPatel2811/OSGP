import React, { useState, useEffect } from "react";
import "./ListUsers.css";
import cross_icon from "../../assets/cross_icon.png";

const ListUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = async () => {
    await fetch("http://localhost:5555/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.users);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const removeUser = async (userId) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this user?"
    );
    if (confirmed) {
      await fetch(`http://localhost:5555/removeUser`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      await fetchUsers();
    }
  };

  return (
    <div className="listUsers">
      <h1>Users List</h1>
      <div className="listUsers-format-main">
        <p>ID</p>
        <p>Name</p>
        <p>Email</p>
        <p>Contact Number</p>
        <p>Remove</p>
      </div>
      <div className="listUsers-allUsers">
        <hr />
        {allUsers.map((user, index) => (
          <React.Fragment key={index}>
            <div className="listUsers-format-main listUsers-format">
              <p>{user.userId}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.contactNumber}</p>
              <img
                onClick={() => removeUser(user.userId)}
                className="listUsers-remove-icon"
                src={cross_icon}
                alt=""
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;

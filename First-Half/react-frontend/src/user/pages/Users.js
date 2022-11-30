import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Holllis B",
      image:
        "https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

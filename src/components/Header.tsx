import React from "react";

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

interface Props {
  user: User | null;
}

function Header({ user }: Props) {
  if (!user) {
    return null;
  }

  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.image}</div>
    </>
  );
}

export default Header;

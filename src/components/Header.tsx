import { useSession } from "next-auth/react";
import React from "react";

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

interface Props {
  user: User;
}

function Header({ user }: Props) {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.image}</div>
    </>
  );
}

export default Header;

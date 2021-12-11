import React from "react";
import styled from "@emotion/styled";
import type { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";

const Container = styled.div`
  padding: 0.5rem;
  background-color: #c49ecf;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.25rem;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-size: small;
`;

const SignOutBtn = styled.button`
  border: 2px solid #3c4856;
  padding: 0.5em;
  background-color: #c49ecf;
  border-radius: 20px;
  font-size: large;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
`;

interface Props {
  user: DefaultSession["user"];
}

function Header({ user }: Props) {
  if (!user) {
    return null;
  }

  return (
    <Container>
      <User>
        <UserInfo>
          <ProfileImg src={user.image ?? ""} />
          <UserName>{user.name}</UserName>
        </UserInfo>
        <SignOutBtn onClick={() => signOut()}>Sign Out</SignOutBtn>
      </User>
    </Container>
  );
}

export default Header;

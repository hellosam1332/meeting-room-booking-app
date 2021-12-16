import React from "react";
import styled from "@emotion/styled";
import type { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";

const Container = styled.div`
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
  border: 1px solid #00185c;
`;

const UserName = styled.span`
  color: black;
  font-size: 1rem;
  font-weight: 600;
`;

const SignOutBtn = styled.button`
  padding: 0.5em;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 0.5em;
  text-decoration: underline;
  background-color: transparent;
  transition: 0.5s;
  cursor: pointer;
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
      <UserInfo>
        <ProfileImg src={user.image ?? ""} />
        <UserName>{user.name}</UserName>
      </UserInfo>
      <SignOutBtn onClick={() => signOut()}>sign out</SignOutBtn>
    </Container>
  );
}

export default Header;

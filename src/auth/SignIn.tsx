import styled from "@emotion/styled";
import { ClientSafeProvider } from "next-auth/react/types";
import { signIn } from "next-auth/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.div``;

const SignInWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignInButton = styled.button`
  width: 50vw;
  height: 3rem;
  background-color: white;
  border-radius: 40px;
`;

interface Props {
  providers: ClientSafeProvider[];
}

export default function SignIn({ providers }: Props) {
  return (
    <Container>
      <Title>
        <h3>Kurly meeting room booking app</h3>
      </Title>
      <SignInWrap>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <SignInButton type="button" onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </SignInButton>
          </div>
        ))}
      </SignInWrap>
    </Container>
  );
}

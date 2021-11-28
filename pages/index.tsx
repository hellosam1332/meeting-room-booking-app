import { getProviders, useSession } from "next-auth/react";
import { ClientSafeProvider } from "next-auth/react/types";
import Main from "./Main";
import SignIn from "../src/auth/SignIn";

interface Props {
  providers: ClientSafeProvider[];
}

const Home = ({ providers }: Props) => {
  const { data: session } = useSession();

  return (
    <>
      {session && <Main />}
      {!session && <SignIn providers={providers} />}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Home;

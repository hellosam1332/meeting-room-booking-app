import { ClientSafeProvider } from "next-auth/react/types";
import { getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SignIn from "../../src/auth/SignIn";

interface Props {
  providers: { google: ClientSafeProvider };
}

export default function Signin({ providers }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/").catch();
    }
  }, [session, router]);

  return <SignIn provider={providers.google} />;
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

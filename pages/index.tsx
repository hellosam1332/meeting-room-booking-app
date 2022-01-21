import { useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Main from "./Main";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/signin").catch();
    }
  }, [session, router]);

  return <Main />;
};

export default Home;

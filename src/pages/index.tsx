import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/userCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {}
  }
};

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-green-500">netflix clone</h1>
      <p className="text-white">Logged in as : {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>log out</button>
    </>
  )
}

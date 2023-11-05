import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/userCurrentUser";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Navbar />
      <h1 className="text-green-500">netflix clone</h1>
      <p className="text-white">Logged in as : {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>log out</button>
    </>
  )
}

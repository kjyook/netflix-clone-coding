import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/userCurrentUser";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  )
}

import useCurrentUser from "@/hooks/userCurrentUser";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ControlRoute } from "@/models/ControlRoute";

interface MemberProps {
  link: string;
};

const Member = ({ link }: MemberProps) => {
    const { data: user } = useCurrentUser();
    const router = useRouter();

    return (
    <>
    <div onClick={() => {router.push('/')}} className="group flex-row w-44 mx-auto">
      <div
      className="
      w-44
      h-44
      rounded-md
      flex
      items-center
      border-2
      border-transparent
      group-hover:cursor-pointer
      group-hover:border-white
      overflow-hidden
      ">
        <img src={link} alt="Profile" />
      </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {user?.name}
      </div>
    </div>
    </>
  )
}

const Profiles = () => {
    const { data: user } = useCurrentUser();

    ControlRoute();

    return (
    <>
      <h1 className="text-green-500">Profile</h1>
      <p className="text-white">Logged in as : {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>log out</button>
      <div className="flex items-center h-full justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
          <div className="flex items-center justify-center gap-8 mt-10">
            <Member link="/images/default-blue.png" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Profiles;
import React, { useEffect } from "react";
import useCurrentUser from "@/hooks/userCurrentUser";

interface AccountMenuProps {
    visible: boolean;
};

const AccountMenu = ({ visible }: AccountMenuProps) => {
    const { data: user } = useCurrentUser();
    

    if (!visible){
        console.log("not visible");
        return null;
    }

    return (
        <>
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src='/images/default-blue.png' alt="" />
                    <p className="text-white text-sm group-hover/itme:underline">
                        {user?.name}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default AccountMenu;
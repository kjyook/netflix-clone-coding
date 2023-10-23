import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";
import { useState, useCallback } from "react";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = useCallback(() => setVisible((val) => !val), []);

    return (
        <nav className="w-full fixed z-40">
            <div className="
            px-4 md:px-16 py-6
            flex flex-row items-center transition duration-500 
            bg-zinc-900 bg-opacity-90
            "
            >
                <img src="/images/logo.png" alt="logo" className="h-7 lg:h-7" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by languages" />
                </div>
                <div onClick={toggleVisible} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className="text-white transition" />
                    <MobileMenu visible={visible} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
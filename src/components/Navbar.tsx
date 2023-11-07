import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useState, useCallback, useEffect } from "react";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [mobilevisible, setmobileVisible] = useState(false);
    const toggleVisible = useCallback(() => setmobileVisible((val) => !val), []);

    const [accountvisible, setaccountVisible] = useState(false);
    const toggleAccountVisible = useCallback(() => setaccountVisible((val) => !val), []);

    const [backgroundvisible, setBackgroundVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setBackgroundVisible(true);
            }   else {
                setBackgroundVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div className={`
            px-4 md:px-16 py-6
            flex flex-row items-center transition duration-500 
            ${backgroundvisible ? 'bg-zinc-900' : ''}
            `}
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
                    <BsChevronDown className={`text-white transition ${mobilevisible ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={mobilevisible} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div  className="relative">
                        <div onClick={toggleAccountVisible} className="flex flex-row items-center gap-2 cursor-pointer">
                            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                                <img src="/images/default-blue.png" alt="" />
                            </div>
                            <BsChevronDown className={`text-white transition ${accountvisible ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        <AccountMenu visible={accountvisible} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
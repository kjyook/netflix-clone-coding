interface NavbarItemProps {
    label: string;
};

const NavbarItem = ({label} : NavbarItemProps) => {
    return (
        <div className="text-white">
            {label}
        </div>
    )
}

export default NavbarItem;
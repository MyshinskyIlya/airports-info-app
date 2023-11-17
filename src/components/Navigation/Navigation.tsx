import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
            <NavLink to="/">Airport</NavLink>
        </nav>
    );
};

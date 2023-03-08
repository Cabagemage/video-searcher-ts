import type {FC} from "react";
import {useLocation} from "react-router-dom";
import clsx from "clsx";

type HeaderProps = {

}

const links = [
    {url: "/", label: "Featured"},
    {url: "/top-categories", label: "Top Categories"},
    {url: "/all-categories", label: "All Categories"},
    {url: "/pricing", label: "Pricing"}]

const Header:FC<HeaderProps> = ({}: HeaderProps) => {
    const location = useLocation();
    console.log(location)
return (
<header className="w-[100%] flex space-between items-center">
    <nav>
        <ul className="menu menu-horizontal bg-base-100 rounded-box">
            {links.map((item) => {
                return (
                    <li key={item.url}><a  className={clsx("rounded-xl",{"active": location.pathname === item.url})} href={item.url} id={item.url}>{item.label}</a></li>
                )
            })}
        </ul>
    </nav>
</header>
)
}

export default Header
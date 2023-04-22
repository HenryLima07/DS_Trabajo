import { Link } from "react-router-dom";

const NavElement = ({title, button, to, children})=>{
    return(
        <div className="flex flex-col">
            <h2 className=" font-extrabold text-2xl">{title}</h2>
            {children}
            <Link to={to} className=" border-2 rounded-full border-starbucks-Green text-starbucks-Green hover:bg-starbucks-Green-alt font-extrabold uppercase text-xs m-3 p-4 w-max">{button}</Link>
        </div>
    )
}

export default NavElement;
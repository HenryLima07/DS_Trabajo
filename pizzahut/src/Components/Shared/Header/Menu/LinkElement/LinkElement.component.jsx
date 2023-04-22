import gold_small_bg from "/img/gold-small-bg.svg";
import title_bg from "/img/title-bg.svg";

import { Link } from "react-router-dom"
const LinkElement = ({children, to})=>{
    return(
        <Link to={to} className="flex justify-center bg-[url('/img/title-bg.svg')] hover:text-black hover:bg-[url('/img/gold-small-bg.svg')] bg-center bg-cover bg-no-repeat min-w-[15%]">
            <li className={` mx-4 my-4 uppercase`}>{children}</li>
        </Link>

    )
}

export default LinkElement;
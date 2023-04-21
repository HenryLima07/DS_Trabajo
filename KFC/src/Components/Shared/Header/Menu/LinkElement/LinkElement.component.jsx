
import { Link } from "react-router-dom";

//assets
import ext from "/img/art08.svg"

const LinkElement = ({ children, to})=>{
    return(
        <Link to={to} className=" min-w-[15%] flex justify-center uppercase hover:bg-[url('/img/art08.svg')] bg-contain bg-center bg-no-repeat">
            <li className=" mx-4 my-8">{ children }</li>
        </Link>
    )
}
export default LinkElement;
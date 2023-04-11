
const SubNavigationBar = ({
    onClickHandler = ()=>{}, 
    className = "",
    liClass = "",
    children
})=>{

    return(
        <li className={`${liClass} flex-grow text-center`}>

            <a 
                onClick={onClickHandler} className={`cursor-pointer w-full block font-medium text-lg leading-tight uppercase border-x-0 border-t-0 border-b-2 border-gray-300 px-6 py-3 my-2 hover:bg-gray-100 ${className}`}

            >{children}</a>

        </li>

    );
}

export default SubNavigationBar;
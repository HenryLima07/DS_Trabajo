
//importing components
import AsideMenu from "./AsideMenu/AsideMenu.component";
import Menu from "./Menu/Menu.component";

const Header = ({banner, asideicon, restaurant})=>{
    return(
        <>
            <header className="flex flex-col items-center w-full">
                <img src={banner} alt="wendy logo" className="pt-8 w-1/2 sm:w-1/4"/>
                <h2 className="font-bold text-2xl -mt-2 mb-5">Empleos</h2>
            </header>

            <article>
                <Menu />
                <AsideMenu asideicon={asideicon} restaurant={restaurant}/>
            </article>
        </>
    );
}
"hidden bg-black text-white h-11 w-full lg:flex flex-row justify-around items-center font-bold text-lg a"

export default Header;
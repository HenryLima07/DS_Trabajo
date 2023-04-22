
//elements
import NavElement from "./NavElements/NavElement.component";

const NavContainer = ()=>{
    return(
        <nav className="flex flex-col items-center p-6 py-10 w-1/3 gap-8">
            <NavElement title={"Trabaja en Starbucks"} to="/registro" button="aplica por primera vez">
                <p className=" text-starbucks-Black text-lg py-1 px-3">Todo lo que buscas está aquí. Es el momentode crear un impacto positivo.</p>
            </NavElement>
            <NavElement title={"Oportunidad única"} to="/actualiza-perfil" button="actualiza perfil">
                <p className=" text-starbucks-Black text-lg py-1 px-3">Todo lo que buscas está aquí. Es el momentode crear un impacto positivo.</p>
            </NavElement>
        </nav>
    )
}
export default NavContainer;
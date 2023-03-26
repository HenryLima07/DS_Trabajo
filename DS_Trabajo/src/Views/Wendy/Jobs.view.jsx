//importing elements
import Header from "../../components/Shared/Header/Header.component";
import Footer from "../../components/Shared/Footer/Footer.component";
import JobsContainer from "../../components/Jobs/JobsContainer.component";
import TitleContainer from "../../components/Shared/Title/TitleContainer.component";

const JobsView = ()=>{

    return(
        <>
            <Header />
                <TitleContainer Title={"Busca tu siguiente empleo"} />
                <JobsContainer />
            <Footer />
        </>
    )
}
export default JobsView;
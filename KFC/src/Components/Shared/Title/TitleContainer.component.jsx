// import ninia from "/img/wendys/ninia.svg";

const JobsContainer = ({Title="", subTitle=""})=>{
    return(
       <section className="flex flex-col w-full bg-kfc-red">
            <h1 className={`font-avenirMedium text-4xl text-white pt-4 text-center w-full ${subTitle ? "": "py-8"}`}>{Title}</h1>
            {
                subTitle ? 
                    <h3 className={`font-wendysSimpleFont text-xl text-white pb-4 text-center w-full`}>{subTitle}</h3>
                :
                    <></>
            }
       </section> 
    );
}

export default JobsContainer;

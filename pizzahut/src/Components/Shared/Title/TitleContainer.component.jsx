
const JobsContainer = ({Title="", subTitle=""})=>{
    return(
       <section className="flex flex-col w-full bg-pizzaRed font-lato">
            <h1 className={`text-4xl text-white pt-4 text-center w-full ${subTitle ? "": "py-8"}`}>{Title}</h1>
            {
                subTitle ? 
                    <h3 className={`text-xl text-white pb-4 text-center w-full`}>{subTitle}</h3>
                :
                    <></>
            }
       </section> 
    );
}

export default JobsContainer;

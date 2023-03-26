import ninia from "/img/wendys/ninia.svg";

const JobsContainer = ({Title="", subTitle=""})=>{
    return(
       <section className="flex flex-col w-full bg-wendys-background bg-[url('/img/wendys/ninia.svg')] bg-no-repeat bg-smallWaterMarkSize sm:bg-mediumWaterMarkSize lg:bg-normalWaterMarkSize bg-smallWaterMarkPositon sm:bg-mediumWaterMarkPositon lg:bg-normalWaterMarkPositon">
            <h1 className={`font-wendysSimpleFont text-4xl text-white pt-4 text-center w-full ${subTitle ? "": "py-8"}`}>{Title}</h1>
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

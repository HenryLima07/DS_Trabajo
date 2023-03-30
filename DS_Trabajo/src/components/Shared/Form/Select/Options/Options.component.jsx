const Options = ({selected=false, value="", children})=>{
    return(
        <option selected={selected} value={value}>{children}</option>
    );
}

export default Options;
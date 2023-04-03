const Options = ({selected=false, value="", children})=>{
    return(
        <option value={value}>{children}</option>
    );
}

export default Options;
import { useState } from "react";
import "./Form.css";
const Form=(props)=>{
    const {handleForm,handleSave}=props;
    const [query,setQuery]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        handleForm(query);
        setQuery("");
    }
    return(
    <div className="form-wrapper">
    <form className="form-container" onSubmit={handleSubmit}>
        <input name="question" onChange={e=>setQuery(e.target.value)}/>
        <button type="submit" className="btn">Ask</button>
    </form>
    <button type="submit" className="btn" onClick={handleSave}>Save</button>
    </div>
    )
}

export default Form;
import "./Form.css";
const Form=()=>{
    return(
    <div className="form-wrapper">
    <form className="form-container">
        <input name="question"/>
        <button type="submit" className="btn">Ask</button>
    </form>
    <button type="submit" className="btn">Save</button>
    </div>
    )
}

export default Form;
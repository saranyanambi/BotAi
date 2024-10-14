import "./IntroCard.css";
const IntroCard=(props)=>{
    const {text,subtext,handleForm}=props;
    return(
        <div className="into-card-container" onClick={()=>handleForm(text)}>
            <span className="text">{text}</span>
            <span className="subtext">{subtext}</span>
        </div>
    )
}

export default IntroCard;
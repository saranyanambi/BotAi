import "./IntroCard.css";
const IntroCard=(props)=>{
    const {text,subtext}=props;
    return(
        <div className="into-card-container">
            <span className="text">{text}</span>
            <span className="subtext">{subtext}</span>
        </div>
    )
}

export default IntroCard;
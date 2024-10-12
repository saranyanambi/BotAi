import "./ChatCard.css";

const ChatCard=(props)=>{
    const {icon,name,msg,like,dislike,id,customClass,time,feedback}=props;
    console.log(customClass);
    return(
        <div className={`chatcard-container ${customClass}`}>
            <span>
                <img src={icon} alt={`${name}`} className="img"/>
            </span>
            <span className="chatcard-text">
            <span className="chatcard-name">{name}</span>
            <span className="message">{msg}</span>
            </span>
            <span>{time}</span>
            <span>{name=="Soul AI"?<>
            <img src={feedback} alt="feedback" className="feedback"/>
            <img src={like} alt="img"/>
            <img src={dislike} alt="dislike"/>
            </>
            :
            ""}
            </span>
        </div>
    )
}

export default ChatCard;
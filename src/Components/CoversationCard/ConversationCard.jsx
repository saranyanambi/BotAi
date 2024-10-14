import ChatCard from "../ChatCard/ChatCard";
import "./ConversationCard.css"
const ConversationCard=(props)=>{
        const {conversation}=props;

        const displayconvo=()=>{
                return conversation.map(item=>{
                    console.log(item)
                    const {icon,name,msg,like,dislike,id,time,feedback,comments,rating}=item;
                    return <ChatCard convo="true" icon={icon} name={name} msg={msg} like={like} dislike={dislike} id={id}  time={time} feedback={feedback} comment={comments} rating={rating}/>
                })
        }

        return(
            <div className="convoCard">
                {displayconvo()}
            </div>
        )
}

export default ConversationCard;
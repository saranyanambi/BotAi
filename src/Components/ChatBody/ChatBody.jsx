import "./ChatBody.css";
import bot_icon from "../../assets/bot_icon.png";
import Intro from "../Intro/Intro";
import Form from "../Form/Form";
import SampleData from "../../assets/sampleData.json";
import { findQuestion, time } from "../Commonfunction/function";
import you_icon from "../../assets/you_icon.png";
import like from "../../assets/okay.png";
import dislike from "../../assets/thumbsDown.png";
import ChatCard from "../ChatCard/ChatCard";
import feedback from "../../assets/feedback.png";
const ChatBody=(props)=>{
    const {clearChat,chatWithBot,currentChat}=props;
    const handleForm=(text)=>{

            const botresponse=findQuestion(SampleData,text)
            console.log(botresponse);

            const userMsg={
                icon:you_icon,
                name:"you",
                msg:text,
                id:`${Date.now()}`,
                time:time()

            }

            const botmsg={
                icon:bot_icon,
                name:"Soul AI",
                msg:botresponse?.[0]?.response||"can you provide more infomation about your query?",
                id:`${Date.now()}`,
                like:like,
                dislike:dislike,
                feedback:feedback,
                time:time()
            }
                chatWithBot(userMsg,botmsg);
    }

    const displayCards=()=>{
        if(!currentChat || !currentChat.length)
                return [];
        let customClass
        return currentChat.map((card)=>{
            const {icon,name,msg,like,dislike,id,time,feedback}=card;
            if(name=="Soul AI")
                    customClass="botCard";
            else
                customClass="userCard";
            return <ChatCard icon={icon} name={name} msg={msg} like={like} dislike={dislike} id={id} customClass={customClass} time={time} feedback={feedback}/>
        })
    }
    return(
        <div className="chatbody-container">

        <h1 className="bot">Bot Ai</h1>
        {
            currentChat?.length?
            <>
            <div>
                {displayCards()}
            </div>
            <Form handleForm={handleForm}/>
            </>
        :
        <>
        <Intro handleForm={handleForm}/>
        <Form handleForm={handleForm}/>
        </>
}
        </div>
    )
}

export default ChatBody;
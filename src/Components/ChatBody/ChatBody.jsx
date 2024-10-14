import "./ChatBody.css";
import bot_icon from "../../assets/bot_icon.png";
import Intro from "../Intro/Intro";
import Form from "../Form/Form";
import SampleData from "../../assets/sampleData.json";
import { findQuestion, time ,saveLocal } from "../Commonfunction/function";
import you_icon from "../../assets/you_icon.png";
import like from "../../assets/okay.png";
import dislike from "../../assets/thumbsDown.png";
import ChatCard from "../ChatCard/ChatCard";
import feedback from "../../assets/feedback.png";
import { useEffect } from "react";
const ChatBody=(props)=>{
    const {clearChat,chatWithBot,currentChat,updateComments,updateRating}=props;
    // console.log("chat:"+ currentChat);

    useEffect(()=>{
        if(!currentChat)
                return
        scrolltobottom();
    },[currentChat])
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
                time:time(),
                comments:"",
                rating:0
            }
                chatWithBot(userMsg,botmsg);
    }

    const displayCards=()=>{
        if(!currentChat || !currentChat.length)
                return [];

        // console.log("chat:"+ currentChat[0]);
        let customClass
        return currentChat.map((card)=>{
            // console.log(card)
            const {icon,name,msg,like,dislike,id,time,feedback}=card;
            if(name=="Soul AI")
                    customClass="botCard";
            else
                customClass="userCard";
            return <ChatCard icon={icon} name={name} msg={msg} like={like} dislike={dislike} id={id} customClass={customClass} time={time} feedback={feedback} currentChat={currentChat} updateComments={updateComments} updateRating={updateRating}/>
        })
    }

    const scrolltobottom=()=>{
        // console.log("hi")
        var container=document.getElementById("card-wrapper");
        // console.log(container)
        if(!container)
            return
        container.scrollTop=container.scrollHeight;
    }
    const handleSave=()=>{
        if(!currentChat || !currentChat.length)
               return alert("No Coversation Created")
        saveLocal(currentChat)
        clearChat()

    }
    return(
        <div className="chatbody-container">

      
        {
            currentChat?.length?
            <>
            <div className="card-wrapper" id="card-wrapper">
                {displayCards()}
            </div>
            <Form handleForm={handleForm} handleSave={handleSave}/>
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
import "./ChatBody.css";
import bot_icon from "../../assets/bot_icon.png";
import Intro from "../Intro/Intro";
import Form from "../Form/Form";
const ChatBody=()=>{
    return(
        <div className="chatbody-container">
        <h1 className="bot">Bot Ai</h1>
        <Intro/>
        <Form/>
        </div>
    )
}

export default ChatBody;
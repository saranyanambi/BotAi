import menu_icon from "../../assets/menu_icon.png";
import ChatBody from "../ChatBody/ChatBody";
import PastConvo from "../PastConvo/PastConvo";
import "./BotBody.css";
const BotBody=(props)=>{
    const {sidebarOn,clearChat,pastConvo,handleSideBar,currentChat,chatWithBot}=props;
    return(
        <div className="BotBody-container">
           
            <div>
               { pastConvo?<PastConvo/>:<ChatBody currentChat={currentChat} chatWithBot={chatWithBot} clearChat={clearChat}/>}
            </div>
        </div>
    )
}
export default BotBody;
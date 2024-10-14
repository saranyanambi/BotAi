import menu_icon from "../../assets/menu_icon.png";
import ChatBody from "../ChatBody/ChatBody";
import PastConvo from "../PastConvo/PastConvo";
import "./BotBody.css";
const BotBody=(props)=>{
    const {sidebarOn,clearChat,pastConvo,handleSideBar,currentChat,chatWithBot,updateComments,updateRating}=props;
    return(
        <div className="BotBody-container">
           <div className='BotBodyHead'>
                {
                    !sidebarOn ? <img onClick={handleSideBar} src={menu_icon} alt='menu icon' /> : null
                }
                <h1>Bot AI</h1>
                
            </div>
            <div>
               { pastConvo?<PastConvo/>:<ChatBody currentChat={currentChat} chatWithBot={chatWithBot} clearChat={clearChat} updateComments={updateComments} updateRating={updateRating}/>}
            </div>
        </div>
    )
}
export default BotBody;
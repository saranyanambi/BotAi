import bot_icon from "../../assets/bot_icon.png";
import edit_icon from "../../assets/edit_icon.png";
import "./Sidebar.css";
const Sidebar=(props)=>{

    const {handlePastConvo,sidebarOn,handleSideBar,newChat}=props

    return(
    <div className="sidebar-wrapper">
    <div className="sidebar-container" onClick={newChat}>
        <div>
            <img src={bot_icon} alt="bot_icon" className="bot_icon"/>
        </div>
        <div>
            New Chat
        </div>
        <div>
            <img src={edit_icon} alt="edit_icon"/>
        </div>
    </div>
    <div>
        <button className="past-convo" onClick={handlePastConvo}> Past Conversation </button>
    </div>
    </div>
    )
}

export default Sidebar;
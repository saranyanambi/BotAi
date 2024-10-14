// import bot_icon from "../../assets/bot_icon.png";
// import edit_icon from "../../assets/edit_icon.png";
// import "./Sidebar.css";
// const Sidebar=(props)=>{

//     const {handlePastConvo,sidebarOn,handleSideBar,newChat}=props
//     const sidebarLarge=()=>{
//     return(
//     <div className="sidebar-wrapper side-large">
//     <div className="sidebar-container" onClick={newChat}>
//         <div>
//             <img src={bot_icon} alt="bot_icon" className="bot_icon"/>
//         </div>
//         <div>
//             New Chat
//         </div>
//         <div>
//             <img src={edit_icon} alt="edit_icon"/>
//         </div>
//     </div>
//     <div>
//         <button className="past-convo" onClick={handlePastConvo}> Past Conversation </button>
//     </div>
//     </div>
//     )
// }
// const sidebarSmall=()=>{
//     return(
//     <div className="sidebar-wrapper side-small">
//     <div className="sidebar-container" onClick={newChat}>
//         <div>
//             <img src={bot_icon} alt="bot_icon" className="bot_icon"/>
//         </div>
//         <div>
//             New Chat
//         </div>
//         <div>
//             <img src={edit_icon} alt="edit_icon"/>
//         </div>
//     </div>
//     <div>
//         <button className="past-convo" onClick={handlePastConvo}> Past Conversation </button>
//     </div>
//     </div>
//     )
// }  

//     return(
//         <>
//         {sidebarLarge()}
//         {sidebarOn ?sidebarSmall:null}</>
//     )
// }

// export default Sidebar;


import bot_icon from "../../assets/bot_icon.png";
import edit_icon from "../../assets/edit_icon.png";

import "./Sidebar.css";

const Sidebar = (props) => {
    const { handlePastConvo, sidebarOn, handleSideBar, newChat } = props;

    const sidebarLarge = () => {
        return (
            <div className="sidebar-wrapper side-large">
                <div className="sidebar-container" onClick={newChat}>
                    <div>
                        <img src={bot_icon} alt="bot_icon" className="bot_icon" />
                    </div>
                    <div>New Chat</div>
                    <div>
                        <img src={edit_icon} alt="edit_icon" />
                    </div>
                </div>
                <div>
                    <button className="past-convo" onClick={handlePastConvo}> Past Conversation </button>
                </div>
            </div>
        );
    };

    const sidebarSmall = () => {
        return (
            <div className="sidebar-wrapper side-small">
                <div className="sidebar-container" onClick={newChat}>
                    <div>
                        <img src={bot_icon} alt="bot_icon" className="bot_icon" />
                    </div>
                    <div>New Chat</div>
                    <div>
                        <img src={edit_icon} alt="edit_icon" />
                    </div>
                </div>
                <div>
                    <button className="past-convo" onClick={handlePastConvo}> Past Conversation </button>
                </div>
                {
                    sidebarOn ? 
                    <img onClick={handleSideBar} src="https://w1.pngwing.com/pngs/191/867/png-transparent-black-check-mark-symbol-x-mark-line-area-black-and-white-circle-angle.png" alt="close button" className='closeSideBarButton'/>
                    :
                    null
                }
               
            </div>
        );
    };

    return (
        <>
            {sidebarOn ? sidebarSmall() : sidebarLarge()}
        </>
    );
};

export default Sidebar;

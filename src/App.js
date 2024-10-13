import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/SideBar/Sidebar';
import ChatBody from './Components/ChatBody/ChatBody';
import { useState } from 'react';
import BotBody from './Components/BotBody/BotBody';

function App() {
  const [sidebarOn,setSidebaron]=useState(false);
  const [currentChat,setCurrentChat]=useState([]);
  const [pastConvo,setPastConvo]=useState(false);

  const clearChat=()=>setCurrentChat([]);
  const handlePastConvo=()=>setPastConvo(!pastConvo);
  const handleSideBar=()=>setSidebaron(!sidebarOn);
  const chatWithBot=(userMsg,botMsg)=>{
      setCurrentChat([...currentChat,userMsg,botMsg]);
  }

  const updateComments=(id,comment)=>{
    setCurrentChat(prev=>{
      return prev.map(item=>{
        console.log(item)
        if(item.id==id)
        {
          return{
            ...item,
            comments:comment
          }
          
        }
        return item
      })
    })
  }
  return (
    <div className="App">
        <Sidebar/>
        <BotBody sidebarOn={sidebarOn} clearChat={clearChat} pastConvo={pastConvo} handleSideBar={handleSideBar} currentChat={currentChat} chatWithBot={chatWithBot} updateComments={updateComments}/>
    </div>
  );
}

export default App;

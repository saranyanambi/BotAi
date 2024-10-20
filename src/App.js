import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/SideBar/Sidebar';
import { useState } from 'react';
import BotBody from './Components/BotBody/BotBody';
import { useTheme } from './Components/Context/ThemeContext';

function App() {
  const [sidebarOn,setSidebaron]=useState(false);
  const [currentChat,setCurrentChat]=useState([]);
  const [pastConvo,setPastConvo]=useState(false);
  const {theme,toggleTheme}=useTheme()

  const clearChat=()=>setCurrentChat([]);
  const handlePastConvo=()=>setPastConvo(!pastConvo);
  const handleSideBar=()=>setSidebaron(!sidebarOn);
  const chatWithBot=(userMsg,botMsg)=>{
      setCurrentChat([...currentChat,userMsg,botMsg]);
  }

  const newChat=()=>{
    setCurrentChat([]);
    setPastConvo(false)
  }
  const updateComments=(id,comment,name)=>{
    console.log(currentChat)
    setCurrentChat(prev=>{
      return prev.map(item=>{
        console.log(item)
        if(item.id==id && item.name==name)
        {
          return{
            ...item,
            comments:comment,
            
          }
          
        }
        return item
      })
    })
  }

  const updateRating=(id,rating)=>{
    setCurrentChat(prev=>{
      return prev.map(item=>{
        console.log(item)
        if(item.id==id)
        {
          return{
            ...item,
            rating:rating,
            
          }
          
        }
        return item
      })
    })
  }


  return (
    <div className={`App ${theme}`}>
        <button onClick={toggleTheme} className='toggle-btn'>Change to {theme=="dark"? "light" :"dark"}</button>
        <Sidebar handlePastConvo={handlePastConvo} sidebarOn={sidebarOn} handleSideBar={handleSideBar} newChat={newChat}/>
        <BotBody sidebarOn={sidebarOn} clearChat={clearChat} pastConvo={pastConvo} handleSideBar={handleSideBar} currentChat={currentChat} chatWithBot={chatWithBot} updateComments={updateComments} updateRating={updateRating}/>
    </div>
  );
}

export default App;

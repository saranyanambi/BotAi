import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/SideBar/Sidebar';
import ChatBody from './Components/ChatBody/ChatBody';

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <ChatBody/>
    </div>
  );
}

export default App;

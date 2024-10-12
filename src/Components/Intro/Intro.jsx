import IntroCard from "../IntroCard/IntroCard";
import bot_icon from "../../assets/bot_icon.png";
import "./Intro.css";
const Intro=()=>{
        const text1="Hi,What is the weather";
        const text2="Hi, What is my Location";
        const text3="What is the temperature";
        const text4="Hi How are You";
        const subtext="Get immediater AI generated response";

        return(
            <div  className="intro-container">
            <div>
            <div className="bot-intro">
            <h1> How Can I Help You Today?</h1>
            <img src={bot_icon} alt="bot-icon" className="bot-icon"/>
            </div>
           
        </div>
            <div className="intro-cards">
                <IntroCard text={text1} subtext={subtext}/>
                <IntroCard text={text2} subtext={subtext}/>
                <IntroCard text={text3} subtext={subtext}/>
                <IntroCard text={text4} subtext={subtext}/>
            </div>
            </div>
        )
}

export default Intro;
import { useState } from "react";
import "./ChatCard.css";
import Modal from "react-modal";
import Rating from "@mui/material/Rating";

const ChatCard=(props)=>{
    const {icon,name,msg,like,dislike,id,customClass,time,feedback,currentChat,updateComments}=props;

    console.log(id);
    const [showFeedback,setShowfeedback]=useState(false);
    const [userFeedback,setUsefeedback]=useState("")
    console.log(customClass);
    const [isModelOpen,setIsModelOpen]=useState(false);
    const [showRating,setShowRating]=useState(false)
    const [rating,setRating]=useState(0);

    const modalStyle={
        content:{
            top:"30%",
            left:"40%",
            right:"auto",
            bottom:"auto",
            transform:"translate("-50%","-50%")",
            width:"80%",
            maxWidth:"500px",
            background:"rgba(255,255,255,0.6)",
            borderRadius:"1rem",
            
        }
    }

    const handle=(e,feedback)=>{
        e.preventDefault()
        setUsefeedback(feedback)
        setIsModelOpen(false)
        setShowfeedback(false)
        const newComment=userFeedback;
        updateComments(id,newComment)

        console.log(feedback,"submit");
    }

    const handleFeedbackOpen=()=>{
        setShowfeedback(true)
        setIsModelOpen(true)
    }
    const handleRating=()=>{
        setShowRating(true)
        setRating(prev=>Math.min(prev+1,5))
        
    }
    return(
        <div className={`chatcard-container ${customClass}`}>
            <span>
                <img src={icon} alt={`${name}`} className="img"/>
            </span>
            <span className="chatcard-text">
            <span className="chatcard-name">{name}</span>
            <div className="msg-container">
            <span className="message">{msg}
            <div className="interaction_icon">
            {name=="Soul AI" && (
                <>
            <img src={feedback} alt="feedback" className="feedback" onClick={()=>handleFeedbackOpen()}/>
            <img src={like} alt="img" onClick={()=>handleRating()}/>
            <img src={dislike} alt="dislike"/>
            
            </>)}
            </div>
            </span>
            </div>
            </span>
            
            
           
           
            <span>{time}</span>
        
            <div>{userFeedback.length>0?userFeedback:""}</div>
            {showRating &&
            <Rating
            value={rating}
            onChange={(e,newValue)=>{
                setRating(newValue)
            }}
            precision={1}/>
        }
            <Modal
            isOpen={isModelOpen}
            onRequestClose={()=>setIsModelOpen(false)}
            style={modalStyle}
            contentLabel="Feedback">
           { showFeedback && 
                     <form onSubmit={(e)=>handle(e,userFeedback)}>
                     <textarea
                     value={userFeedback}
                     placeholder="Share your feedback"
                     onChange={e=>setUsefeedback(e.target.value)}
                     required
                     className="textarea"
                     />
                    <div className="btn-container">
                     <button type="submit" className="submit">Submit</button>
                
                     <button onClick={()=>setIsModelOpen(false)} className="cancel">Cancel</button>

                     </div>
                 </form>
                 }
        </Modal>
        </div>
    )
}

export default ChatCard;


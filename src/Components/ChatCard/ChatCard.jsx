import { useState } from "react";
import "./ChatCard.css";
import Modal from "react-modal";
import Rating from "@mui/material/Rating";

const ChatCard=(props)=>{
    const {icon,name,msg,like,dislike,id,customClass,time,feedback,currentChat,updateComments,updateRating,comment,rating,convo}=props;

    // console.log(id);
    const [showFeedback,setShowfeedback]=useState(false);
    const [userFeedback,setUsefeedback]=useState("")
    // console.log(customClass);
    const [isModelOpen,setIsModelOpen]=useState(false);
    const [showRating,setShowRating]=useState(false)
    const [ratings,setRating]=useState(0);

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
        updateComments(id,newComment,name)

        console.log(feedback,"submit");
    }

    const handleFeedbackOpen=()=>{
        setShowfeedback(true)
        setIsModelOpen(true)
    }
    const handleRating=()=>{
        setShowRating(true)
        // console.log(rating)
       
        
    }
    return(
        <div className={`chatcard-container ${customClass}`}>
            <div>
                <img src={icon} alt={`${name}`} className="img"/>
            </div>
            <div className="chatCard-text-container">
            <span className="chatcard-text">
            <span className="chatcard-name">{name}</span>
            <div className="msg-container">
            <span className="message">{msg}
                    {!convo &&   
                    <div className="interaction_icon">
                        {name=="Soul AI" && (
                            <>
                        <img src={feedback} alt="feedback" className="feedback" onClick={()=>handleFeedbackOpen()}/>
                        <img src={like} alt="img" onClick={()=>handleRating()}/>
                        <img src={dislike} alt="dislike"/>
                        
                        </>)}
                    </div>}
            </span>
            </div>
            </span>
            
            {convo && name=="Soul AI" ? (
                <>
                <div className="time-rate">
           
                        <div className="time">{time}</div>
                        
                                <Rating
                                value={rating}
                                readOnly
                                />
                        </div>
       
       </>)
       :
            (
           
           <>
           <div className="time-rate">
           
            <div className="time">{time}</div>
                    {showRating &&
                        <Rating
                                    value={ratings}
                                    onChange={(e,newValue)=>{
                                        console.log(newValue)
                                        setRating(newValue)
                                        updateRating(id,newValue);
                                        
                                    }}
                                    precision={1}
                            />
                }

            </div>

        </>
    )}

         {convo && name=="Soul AI" && <div>Feedback: {comment}</div>} 

         <div>{userFeedback.length>0?userFeedback:""}</div>

         </div>
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


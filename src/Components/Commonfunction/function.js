export const findQuestion=(data,text)=>{
    const str=text.toLowerCase();

    return data.filter(item=>item.question.toLowerCase().includes(str))
}

export const time=()=>{
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let ampm=hour>=12?"PM":"AM";
    hour=hour%12;
    hour=hour?hour:12;
    return hour.toString().padStart(2,'0')+":"+min.toString().padStart(2,'0')+" "+ampm;
}

export const saveLocal=(currentChat)=>{
    const newConvo={id:`save-${Date.now()}`,conversation:currentChat}
    let saveConvo=[newConvo]

    const pastChat=JSON.parse(localStorage.getItem("pastconversation"));
    if(pastChat)
    {
        saveConvo=[newConvo,...pastChat];

    }
    localStorage.setItem("pastconversation",JSON.stringify(saveConvo));
}

export const fetchStar=(star,convo)=>{
        return convo.map(item=>{
            const filterconversation= item.conversation.filter(ele=>ele.rating==star)

            return{
                id:item.id,
                conversation:filterconversation
            }
        
        })
}

// export const fetchStar = (rating,conversations) => {
//     console.log(conversations)
//     return conversations
//     .filter(conv => 
//         conv.conversation.some(msg => msg.rating === rating) // Filter conversations
//     )
//     .map(conv => ({
//         ...conv,
//         conversation: conv.conversation.filter(msg => msg.rating === rating) // Keep only messages with selected rating
//     }));
        
// };



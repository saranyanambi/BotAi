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
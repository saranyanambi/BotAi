
import { useState, useEffect } from "react";
import ConversationCard from "../CoversationCard/ConversationCard";
import { fetchStar } from "../Commonfunction/function";
import "./PastConvo.css";

const PastConvo = () => {
    const [convos, setConvos] = useState([]);
    const [starSelect, setStarSelect] = useState("");
    const [filteredConvo, setFilteredConvo] = useState([]);

    useEffect(() => {
        const fetchLocal = () => {
            const localCovo = localStorage.getItem("pastconversation");
            if (localCovo) {
                const parsedConvos = JSON.parse(localCovo);
                setConvos(parsedConvos);
                setFilteredConvo(parsedConvos);
            }
        };
        fetchLocal();
    }, []);

    const handleStarSelect = (e) => {
        const selectedStar = e.target.value;
        setStarSelect(selectedStar);

        if (selectedStar) {
            const res = fetchStar(selectedStar, convos);
            setFilteredConvo(res);
        } else {
            setFilteredConvo(convos); 
        }
    };

    const displayCards = (filteredConvo) => filteredConvo.map(item => {
        const { id, conversation } = item;

        return conversation.length>0 && <ConversationCard key={id} conversation={conversation} />;
    });

    return (
        <div className="pastconvo-wrapper">
            <h3>Conversation History</h3>
            <div className="select">
                <select 
                    name="star" 
                    id="start" 
                    value={starSelect} 
                    onChange={handleStarSelect}
                >
                    <option value="">Select Star</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                </select>
            </div>
            <p>Today's Chat</p>
            <div className="pastconvo-container">
                {filteredConvo.length ? displayCards(filteredConvo) : "No conversations found."}
            </div>
        </div>
    );
};

export default PastConvo;


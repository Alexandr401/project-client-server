import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../Rightbar/RightBar";
import Table from "../Table/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "./Chat.css"
import { useState } from "react";
function Chat() {
    const [leftBarVisible, setLeftBarVisible] = useState(true);
    const [rightBarVisible, setRightBarVisible] = useState(true);
    const toggleLeftBar = () => {
        setLeftBarVisible(!leftBarVisible);
    };
    const toggleRightBar = () => {
        setRightBarVisible(!rightBarVisible);
    };


    return(
        <div className="block-chat">
            {leftBarVisible && <LeftBar visible={leftBarVisible} />}
            
            <div className="chat-search">
                <span className="icon-bar" onClick={toggleLeftBar}>{leftBarVisible ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronLeft} />}</span>

                <div className="chat">
                    <div className="chat-position">
                        <Table />
                    </div>
                </div>

                <span className="icon-bar" onClick={toggleRightBar}>{rightBarVisible ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
            </div>
            
            {rightBarVisible && <RightBar visible={rightBarVisible} />}
        </div>
    )
}

export default Chat;
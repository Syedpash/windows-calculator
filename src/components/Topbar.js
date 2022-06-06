import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faClose, faWindowMaximize, faWindowMinimize} from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
    return (
        <div className="topbar">
            <p>Calculator</p>
            <div className="topbar-icons">                
                <FontAwesomeIcon className="icon" icon={faWindowMinimize} />
                <FontAwesomeIcon className="icon" icon={faWindowMaximize} />
                <FontAwesomeIcon className="icon" icon={faClose} />
            </div>
        </div>
    );
};

export default Topbar;

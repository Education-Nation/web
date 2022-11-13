import React from "react";

//import { leaders } from "../constants";
import styles, { layout } from "../style";
import Event_heading from "./Event_heading";
import Event_content from "./Event_content";
const Events = () => {
    return (
        <div>
            <Event_heading />
            <Event_content />
        </div>
    );
}

export default Events;


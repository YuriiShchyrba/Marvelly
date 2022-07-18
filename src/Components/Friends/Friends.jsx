import React  from "react";
import { NavLink } from "react-router-dom";
import Friend from "./Friend";

const Friends = props =>{
    const arrOfFriends = [];
    props.friends.forEach((friend,ind)=>{
        arrOfFriends.push(<Friend key={ind} friend={friend} />);
    })
    return(
        <div className="allfriends">
            {arrOfFriends}
        </div>
    )
};

export default Friends;
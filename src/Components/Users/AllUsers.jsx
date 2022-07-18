import React from "react";
import User from "./User";


const AllUsers = (props) =>{
    const users = [];
    props.users.forEach((user,ind)=>{
        let isFriend = false;
        props.friends.forEach(friend=>{
            if(friend.login === user.login) isFriend = true;
        });
        if(user.login !== props.yourlogin) users.push(<User key={ind}  isFriend={isFriend} yourlogin={props.yourlogin} user={user} deleteFriendThunk={props.deleteFriendThunk} addFriendThunk = {props.addFriendThunk}/>);
    });
    return (
        <div className="allusersdata">
            {users}
        </div>
    );
};

export default AllUsers;

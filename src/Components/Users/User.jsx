import React from "react";


const User = (props) =>{
    const {birthdate,fullname,powers, login} = props.user;
    const OnAddFriend = (data) =>{
        props.addFriendThunk(props.yourlogin,login);
    }

    const OnDeleteFriend = (data) =>{
        props.deleteFriendThunk(props.yourlogin,login);
    }
    
    return (
        <div className="userdata">
            <p>{fullname}</p>
            <p>{powers}</p>
            <p>{birthdate}</p>
            {props.isFriend && <button type="button" onClick={OnDeleteFriend}>Delete Friend</button>}
            {!props.isFriend && <button type="button" onClick={OnAddFriend}>Add friend</button>}
        </div>
    );
};

export default User;
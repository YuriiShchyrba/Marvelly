import React from "react";

const Friend = props =>{
    return (
        <div className="friend">
            <p>Full name :{props.friend.fullname}</p>
            <p>Powers :{props.friend.powers}</p>
            <p>Date of birth:{props.friend.birthdate}</p>
        </div>
    );
};

export default Friend;
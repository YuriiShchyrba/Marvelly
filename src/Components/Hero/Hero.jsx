import React from "react";


const Hero = (props) =>{
    return (
        <div className="friend">
            <div >Full name :{props.userData.fullname}</div>
            <div>Date of birth :{props.userData.birthdate}</div>
            <div>Powers :{props.userData.powers}</div>
        </div>
    );
};

export default Hero;



import React from "react";

const Hero = props =>{
    const name = props.hero.name;
    const description = props.hero.description;
    let src = `${props.hero.thumbnail.path}/portrait_medium.${props.hero.thumbnail.extension}`;
    return (
        <div className="herohero">
            <p>{name}</p>
            <p>{description}</p>
            <img src={src} alt="" />
        </div>
    );
};

export default Hero;
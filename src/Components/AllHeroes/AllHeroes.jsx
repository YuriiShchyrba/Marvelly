import React  from "react";
import Hero from "./Hero";

const AllHeroes = props =>{
    const arrOfHeroes = [];
    props.allHeroes.forEach((hero,idx)=>{
        arrOfHeroes.push(<Hero key={idx} hero={hero} />);
    });
    return(
        <div className="allheroescontainerhero">
            {arrOfHeroes}
        </div>
    )
};

export default AllHeroes;
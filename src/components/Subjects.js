import React from "react";
import Listelement from "../Listelement.jsx";

const Subjects = ( { list, semester} ) =>{
    return(
        <div className="absolute grid top-8 right-0 bg-gray-100 w-[8rem] text-center rounded-md gap-y-2 p-3 border-[2px] z-10" >
                {list.map( (subject) =>{ 
                    return (<Listelement name={subject} src={"/"+semester+"/"+subject} />) }
                )}
        </div>
    )
}

export default Subjects;
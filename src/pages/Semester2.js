import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester2 = () =>{

    return(
        
        <div className="semester2">
            <Navbar semName='Semester2'/>
            <Experiements semesterName="semester2" semNum={2}/> 
        </div>
    )
}

export default Semester2;
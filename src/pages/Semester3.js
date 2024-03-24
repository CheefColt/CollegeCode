import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester3 = () =>{
    return(
        
        <div className="semester2">
            <Navbar semName='Semester3'/>
            <Experiements semesterName="semester3" semNum={3}/> 
        </div>
    )
}

export default Semester3;
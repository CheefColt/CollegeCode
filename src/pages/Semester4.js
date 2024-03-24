
import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester4 = () =>{
    return(
        
        <div className="semester4">
            <Navbar semName='Semester4' />
            <Experiements semesterName="semester4" semNum={4}/> 
        </div>
    )
}

export default Semester4;
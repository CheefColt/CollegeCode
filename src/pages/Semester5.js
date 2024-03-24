
import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester5 = () =>{
    return(
        
        <div className="semester5">
            <Navbar semName='Semester5' />
            <Experiements semesterName="semester5" semNum={5}/> 
        </div>
    )
}

export default Semester5;
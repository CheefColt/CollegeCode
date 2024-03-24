
import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester7 = () =>{
    return(
        
        <div className="semester7">
            <Navbar semName='Semester7' />
            <Experiements semesterName="semester7" semNum={7}/> 
        </div>
    )
}

export default Semester7;
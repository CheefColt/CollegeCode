
import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester6 = () =>{
    return(
        
        <div className="semester6">
            <Navbar semName='Semester6' />
            <Experiements semesterName="semester6" semNum={6}/> 
        </div>
    )
}

export default Semester6;
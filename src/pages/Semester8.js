
import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester8 = () =>{
    return(
        
        <div className="semester8">
            <Navbar semName='Semester8' />
            <Experiements semesterName="semester8" semNum={8}/> 
        </div>
    )
}

export default Semester8;
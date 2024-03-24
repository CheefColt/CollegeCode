
import React from "react";
import Experiements from "../components/Expriements.js";
import Navbar from "../Navbar.jsx";

const Semester1 = () =>{
    return(
        <div className="semester1">
            <Navbar semName='Semester1' />
            <Experiements semesterName="semester1" semNum={1}/> 
        </div>
    )
}

export default Semester1;
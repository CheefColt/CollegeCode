import React, { useEffect, useState } from "react";
import Navbar from "../Navbar.jsx";
import Experiements from "../components/Expriements.js";
import Code from "../components/Code.js";

const SubjectPage = ({ semester, subject, sNum, subNum }) => {
    const [sharedState,setSharedState] = useState(1);
    const updateSharedState = (newValue) => { setSharedState(newValue) };
    return(
        <div className=" flex flex-col ">
            <div>
            <Navbar semName={semester} />
            </div>

                <div className=" relative ">
                    <Experiements number={10} expNumber={updateSharedState} semesterName={semester} semNum={sNum}/>
                    { console.log(sharedState)}
                    <div className=" absolute top-32 right-16 w-3/5">
                    <Code sub={subject} number={sharedState} subjectNumber={subNum} semesterNumber={sNum}/>
                    </div>
                </div>
        </div>
    )
}

export default SubjectPage;
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Subjects from "./Subjects.js";
import data from "../codes/subjectList.json";

const Lab = ( {optionName, sem, subject,semNumber} ) =>{
        const [isOpen, setIsOpen] = useState(false);
        const sL = JSON.stringify(data);
        const tempSubjectList = JSON.parse(sL);
        console.log(semNumber);
        const subList = tempSubjectList.Semesters[semNumber-1][semNumber];
        console.log(subList);
        
    return(
        <div className="text-white flex cursor-pointer select-none"
            onClick={() => setIsOpen((prev) => !prev)}>
            <h2>Subject</h2>
            {
                !isOpen ? ( <RiArrowDropDownLine className="size-[1.5em]"/> ) : ( <RiArrowDropUpLine className="size-[1.5em]" />)
            }
            {
                isOpen && (
                    <Subjects list={subList} semester={sem}/>
                )
            }
        </div>
    )
}

export default Lab;
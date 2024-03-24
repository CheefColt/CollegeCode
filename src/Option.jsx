import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Semesterlist from "./Semesterlist";

const Option = ({ optionName }) =>{

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex cursor-pointer select-none h-10 absolute right-5 z-20" 
            onClick={() => {setIsOpen((prev) => !prev);} }
            >
            <h2> {optionName} </h2>
            {
                !isOpen ? ( <RiArrowDropDownLine className="size-[1.5em]"/> ) : ( <RiArrowDropUpLine className="size-[1.5em]" />)
            }

            {
                isOpen && (
                    <div>
                        <Semesterlist />
                    </div>
                )
            }
            
        </div>
    )
}

export default Option;
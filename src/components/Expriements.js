import React, { useEffect, useState } from "react";
import Lab from "./Lab.js";

const Experiements = ({ number, semesterName, semNum, expNumber}) => {
    const [expNum, setExpNum] = useState(1);
    var fIndex = 1;
    console.log(semNum);
    function cInd(val){
        console.log(val);
        expNumber(val);
    }
    return( 

        <div className=" max-h-[70%]  bg-slate-500 w-[15rem] top-32 left-6 relative max-xl:w-[15rem] max-md:w-[10rem] rounded-md p-6">
            
            <Lab sem={semesterName} semNumber={semNum}/>

            <div className="ExperimentList top-2 relative flex flex-col gap-y-2">

            {
                number && (
                    Array(number).fill().map((num,index) => {
                        return <button className="px-[1rem] py-[0.2rem] bg-slate-50 rounded-md" onClick={() => cInd(index+1)}
                        > Experiment {index+1} </button> 
                    })
                )
            }



            </div>

        </div>
    )
}

export default Experiements;
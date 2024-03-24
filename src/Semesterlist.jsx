import React from "react";
import Listelement from "./Listelement";

const Semesterlist = () =>{
    return(
        <div className="absolute grid top-8 right-0 bg-gray-100 w-[8rem] text-center rounded-md gap-y-2 p-3 border-[2px]" >
                <Listelement name='Semester 1' src='/semester1'/>
                <Listelement name='Semester 2' src='/semester2'/>
                <Listelement name='Semester 3' src='/semester3'/>
                <Listelement name='Semester 4' src='/semester4'/>
                <Listelement name='Semester 5' src='/semester5'/>
                <Listelement name='Semester 6' src='/semester6'/>
                <Listelement name='Semester 7' src='/semester7'/>
                <Listelement name='Semester 8' src='/semester8'/>
        </div>
    )
}

export default Semesterlist;
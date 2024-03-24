import React, { useEffect, useState } from "react";
import data from '../codes/allsemCode';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ( {semExpCode, sub, number, subjectNumber, semesterNumber} ) =>{
    const codeString = JSON.stringify(data);
    const jO = JSON.parse(codeString);
    const [stringCh,setStringCh] = useState(data.Semesters[semesterNumber-1][semesterNumber][subjectNumber-1][sub][0]['E1']);
    const propertyKey = 'E'+number;

    const [copy,setCopy] = useState(false);
    useEffect(() =>{
        setStringCh(() => (data.Semesters[semesterNumber-1][semesterNumber][subjectNumber-1][sub][number-1][propertyKey]));
    });
    return(
            <div className=" max-w-[70rem] min-w-[10rem] rounded-md overflow-hidden bg-black">
                <div className="flex justify-between px-4 text-xs text-white items-center">
                    <p>{"Experiment"+number}</p>
                    {
                        copy ? (
                                    <button className="py-2 inline-flex items-center gap-1 text-white">
                                        <span className="text-base mt-1">
                                        <ion-icon name="clipboard-outline"></ion-icon>
                                        </span>
                                            Copied!
                                    </button>

                        ) :
                        (
                            <button className="py-2 inline-flex items-center gap-1 text-white" 
                                    onClick={() => {navigator.clipboard.writeText(stringCh);
                                                    setCopy(true)
                                                    setTimeout(() =>{
                                                        setCopy(false);
                                                    }, 500)}}>
                                    <span className="text-base mt-1">
                                    <ion-icon name="clipboard-outline"></ion-icon>
                                    </span>
                                    Copy Code
                            </button>
                        )
                    }
                </div>
                <SyntaxHighlighter language ="C" style={atomOneDark} customStyle={{padding: "25px"}} wrapLongLines={true}>
                    {stringCh} 
                </SyntaxHighlighter>
            </div>    
    )
}

export default Code;
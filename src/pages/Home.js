import React from "react";
import Navbar from "../Navbar.jsx";

const Home = () =>{
    return(

            <div className="App h-screen flex flex-row">
                <Navbar semName='Semester'/>
                <div className="text-center text-[6rem] z-[1] select-none  w-full flex items-center justify-center"> 
                    <div className=" max-xl:text-[8rem] text-[8rem] max-md:text-[6rem] max-sm:text-[5rem]">       
                    <p className="font3"> Select the <span className="font1" id="semSpan">Semester</span> to begin! </p>
                    </div>
                    
                </div>
            </div>
    )
}

export default Home;
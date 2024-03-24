import React from "react";
import Option from "./Option";

const Navbar = ({semName}) => {
    return(
        <nav className="bg-[#8CB9BD] text-white shadow-md fixed w-full z-40">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col-2 gap-5 h-16 justify-between"> 
                <div className="WebName relative left-2">
                    <a href="/"><h1 className=" text-3xl pt-3"> College Code </h1></a>
                </div>

                <div className="options flex gap-5 items-center justify-between z-20 text-[1.2rem] text-[#FEFBF6]">
                    <Option optionName={semName}/>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
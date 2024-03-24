import React from "react";

const Listelement = ({ name, src }) =>{
    return(
        <a href={src} className=" text-center bg-[#ff5555] hover:bg-[#FF3333] hover:text-white p-2 text-white rounded-md text-[1rem]"> {name} </a>
    )
}

export default Listelement;
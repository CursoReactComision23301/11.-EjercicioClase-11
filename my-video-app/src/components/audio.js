
import React from "react";
import arrayAudio from "@/pages/api/audiodata";

const AudioCaballo = () =>{
    return(
        <div>   
            <ul>
                {arrayAudio.map(data => (
                    <li key={data.id}>
                        <audio controls src={data.src}></audio>
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AudioCaballo;

import React from "react";
import arrayAudio from "@/pages/api/videodata";

const AudioCaballo = () =>{
    return(
        <div>   
            <ul>
                {arrayAudio.map(data => (
                    <li key={data.id}>
                        <audio controls src={data.id}>
                            {/* <source src={data.id} type="audio/mpeg"></source>
                            Your browser does not support the audio element. */}
                        </audio>
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AudioCaballo;
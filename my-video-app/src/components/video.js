import React from "react";
import arrayVideo from "@/pages/api/videodata";

const VideoOso = () =>{
    return(
        <div>   
            <ul>
                {arrayVideo.map(data => (
                    <li key={data.id}>
                        <video width="320" height="240" src={data.src} controls></video>
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VideoOso;
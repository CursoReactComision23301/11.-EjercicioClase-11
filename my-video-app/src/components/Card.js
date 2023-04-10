import AudioCaballo from "./audio";
import VideoOso from "./video";

export default function Card( props ){
    return(
        <>
        <h3>
            <div className="mediaContainer">
                <h3>Oso marrón pescando</h3>
                <VideoOso></VideoOso>
                <br></br>
            </div>
            <div className="mediaContainer">
                <h3>Caballo relinchando</h3>
                <AudioCaballo></AudioCaballo>
                <br></br>
            </div>
        </h3>
        </>
    );
}

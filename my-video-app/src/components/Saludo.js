import Card from "./Card";

export default function Saludo( props ) {
    return(
        <div id="saludo">
            <h2>
                { props.texto } bienvenido a la sección de animales salvajes!
            </h2>
                <br></br>
            <Card text={ props.texto } >
                { props.children }
            </Card>
        </div>
    );
}
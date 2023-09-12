export default function PrimeiroComponente(props){
    return(
        <>
            <h1 className={props.css}>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>

        </>
    )
}
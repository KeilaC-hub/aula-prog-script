function GerarLista(valor = 10){
    let lista = [];
    for(let i = 0; 1 <= valor; i++){
        lista.push(<span>{i}</span>)
    }
    return lista
}

export default function Desafio(){
    return(
        <>
            {GerarLista()}
        </>
    )
}
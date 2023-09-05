import PrimeiroComponente from "@/components/primeiroComp";
import ValidaCPF from "@/components/ValidaCPF";

export default function AulaComp(){
    return(
        <>
            <PrimeiroComponente
                titulo="Meu primeiro componente"
                subtitulo="Estamos aprendendo NEXT.js com REACT"
            />

            <ValidaCPF cpf="58462489521"/>
            <ValidaCPF cpf="584624895"/>
        </>
    )
}
namespace exemplo1 {
    let valor: number = 1;
    let cont: number = 0;
    do {
        console.log(`contador: ${cont}`)
        cont++
        cont == 10 ? valor = 0 : valor = 1
    }   while(valor >= 1);

    while (valor >= 0) {
            console.log(`Entrou no while, o valor está em: ${valor}`);
            valor++
            if(valor >= 20){
                break
            }

    }

    for (let i = 1; i <= 10; i++){
        console.log(i);
    }

    const nome = "carro"
    for (const letra of nome){
        console.log(letra)
    }

    let vetor = [1,2,3,4,5]
    for(const index in vetor){
        console.log(index);
    }

    for(const valor of vetor){
        console.log(valor);
    }

    const carro: string{} = {
        marca: "Gol",
        ano: 1998,
        cor: "Roxo",
    }

    for (let props in carro){
        console.log(`${props}: ${carro[props]}`)
    }

}
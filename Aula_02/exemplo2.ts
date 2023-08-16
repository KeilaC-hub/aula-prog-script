namespace exemplo2 {
    let vetor: number[] = [1,2,3,4,5];
    console.log(vetor);
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor[i]);
        soma(vetor[i], vetor[i])
    }
    // pop, push, shift, unshift

    function soma(a: number, b: number){
        let result: number = a + b
        return result
        console.log(result);
    }

    let newVetor: number[] = []
    for(let j = 0; j < vetor.length; j++){

    }
    
}
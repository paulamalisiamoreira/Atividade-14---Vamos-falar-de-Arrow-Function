
// O que é uma arrow function?

// Uma das principais características das arrow functions no JavaScript é a sua sintaxe reduzida, que permite escrever funções de forma mais concisa e elegante. 
// A seta (=>) indica que estamos criando uma arrow function.

// atividade 1
const dobrarNumeros = (a,b,c,d) => a*2 + "," + b*2 + "," + c*2 + "," + d*2;

// correção atvd 1

function ex1(){
    const dobrarValores = array  => array.map((numero) => numero * 2);
    const numeros = [11,22,33,44];

    const numerosDobrados = dobrarValores(numeros);
    console.log(numeros);
    alert(numeros);
}

// aqui definimos a função dobrarNumeros, entao colocamos 4 parâmetros a, b, c e d. Depois colocamos a seta "=>" padrão de 
// uma arrow function e simplesmente colocamos o que queremos que ela retorne sem precisar colocar return.



// atividade 2

const medePalavras = (a,b) => {

    if (a.length > b.length) 
        return b + "," + a;
    else if (a.length < b.length)
        return a + "," + b;
    else
        return a + "," + b;
}


// correção atvd 2

function ex2(){
    const ordenarPorComprimento = (array) => 
        array.sort((a,b) => a.length - b.length)

    const palavras = ["Lightning MacQueen","The King","Cop","Fabulous Hubson Hornet"];

    const palavrasOrdenas = ordenarPorComprimento(palavras);
    console.log(palavrasOrdenadas);
    alert(palavrasOrdenadas);

}



// atividade 3

const quatroEhPar = [1,2,5,4];
const result = quatroEhPar.filter((quatroEhPar) => quatroEhPar % 2 === 0);


// correção atvd 3

function ex3_1(){

    function filtrarNumerosPares(array){
        const numerosPares = [];
        for(const numero of array){
            if(numero % 2 === 0)
                
        }
    }
    return numerosPares
}

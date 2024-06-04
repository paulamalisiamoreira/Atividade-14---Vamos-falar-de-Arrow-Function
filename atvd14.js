
// O que é uma arrow function?

// Uma das principais características das arrow functions no JavaScript é a sua sintaxe reduzida, que permite escrever funções de forma mais concisa e elegante. 
// A seta (=>) indica que estamos criando uma arrow function.

// atividade 1
const dobrarNumeros = (a,b,c,d) => a*2 + "," + b*2 + "," + c*2 + "," + d*2;

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

// atividade 3

const quatroEhPar = [1,2,5,4];
const result = quatroEhPar.filter((quatroEhPar) => quatroEhPar % 2 === 0);



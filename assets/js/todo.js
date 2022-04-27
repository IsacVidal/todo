import {escreve} from "./utils/write.js";

console.log("Avanti Palestra");
console.info("Avanti Palestra");
console.error("Avanti Palestra");
console.warn("Avanti Palestra");

//const - constante - Não muda. Nunca. A não ser objetos e referências, aí o seu conteudo pode mudar.
const nome = 'Isac Vidal';

//let - variável - pode mudar a qualquer momento.
let email = 'isacvidal94@gmail.com';

//var nome

// Transpiladores: BabelJS

console.log(`Nome: ${nome} Email: ${email}`);

if (nome == "Isac Vidal") {
    console.log("é igual");
}

//hoisting: o JS faz duas analises do código. A primeira é analise léxica a segunda é a análise 
//podemos chamar a função antes dela ser escrita.
// o const e let não sofrem hoisting

//function escreve(x){
//    console.log('Frase: ' + x);
//}


escreve (`Seja bem-vindo ${nome}`);
escreve (`Treinamento HTML, CSS3 e JS`);

//#################################################
// objeto.metodo()
// objeto.propriedade = valor;

// window é um objeto.     window.innerHeight  window.innerWidth

//#################################################

// Em javascript existem 7 tipos de erros, e cada representa um coisa

// Type Error, Reference Error, Syntax Error, Eval, Range error, Internal Error, URIError
// Uniform Resource Identifier (URI)

// Type, Reference, Syntax. (Principais)

//##################################################

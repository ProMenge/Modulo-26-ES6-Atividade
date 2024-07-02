//Criação de Classe de Aluno

class Aluno {
    constructor(nome, nota) {

        this.nome = nome;
        this.nota = nota;
    }
}

//Criação de De Objetos

const julio = new Aluno("Julio", 7);
const gian = new Aluno("Gian", 9);
const fred = new Aluno("Fred", 10)
const pedro = new Aluno("Pedro", 2)
const larissa = new Aluno("Larissa", 6)
const laura = new Aluno("Laura", 1)
const giovanna = new Aluno("Giovanna", 9)

//Transformação em Array

const listaAlunos = [];

listaAlunos.push(julio, gian, fred, pedro, larissa, laura, giovanna);
// console.log(listaAlunos);

const alunosNaMedia = listaAlunos.filter(function (item) {
    return item.nota >= 6;
});

const alunosForaDaMedia = listaAlunos.filter(function (item) {
    return item.nota < 6;
});

const retornaNaMedia = () => {

    for (let i = 0; i < alunosNaMedia.length; i++) {

        console.log(`O aluno ${alunosNaMedia[i].nome} passou com média:${alunosNaMedia[i].nota} `)
    }
}

const retornaForaDaMedia = () => {

    for (let i = 0; i < alunosForaDaMedia.length; i++) {

        console.log(`O aluno ${alunosForaDaMedia[i].nome} ficou retido com média de:${alunosForaDaMedia[i].nota} `)
    }
}


retornaNaMedia();
retornaForaDaMedia();
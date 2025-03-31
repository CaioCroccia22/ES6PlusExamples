//O JavaScript é uma linguagem single-threaded, ou seja, executa tarefas em uma única thread de execução, 
// mas pode lidar com operações assíncronas por meio do Event Loop

// Por padrão, o JavaScript executa código de forma síncrona e sequencial, mas operações assíncronas (como Promises e async/await) 
// permitem execução não bloqueante.


//Ex: Quando temos mais de um tarefa o Javascript realiza isso de forma sequencial (Sincrona)
//Inserção do recurso de Async

const { rejects } = require("assert");



function funcaoMuitoPesada(){
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++){
        execucoes ++;
    }
    return execucoes;
}
// Resolve -> Sucesso do processamento
//Reject -> Falha no processamento

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try{
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++){
            execucoes++;
        }
        resolve(execucoes);
    } catch(e){
        reject('Deu erro na iteração dos números')
    }
})

// console.log('inicio');
// // console.log(funcaoMuitoPesada())
// funcaoMuitoPesadaPromise.then(resultado => 
//     console.log(resultado)).catch(erro => console.log(erro));
// console.log('fim');

//Caso a função assicrona não possa falhar
async function execucaoPrincipal(){
    console.log('Inicio')

    //Você informa que deve aguardar a função para continuar
    
    /*
    Primeira opção)

    await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    
    console.log('Fim')
    */


    /*Segunda opção */
    try{
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch(e) {
        console.log(e);
    }

    console.log('fim');
}

execucaoPrincipal();
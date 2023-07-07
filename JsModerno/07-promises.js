
/*
* Promises.
* then/catch
*/

// const apiCall = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Sucesso!');
//         reject('Erro!');
//     }, 2000);
// });

// apiCall
//     .then((resposta) => {
//         console.log(resposta);
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

/*
* Promises.
* async/await
*/

const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Sucesso!');
        reject('Erro!');
    }, 2000);
});

async function run() {
    try {
        const resposta = await apiCall;
        console.log(resposta);
    } catch(error) {
        console.log(error);
    }
}

run();
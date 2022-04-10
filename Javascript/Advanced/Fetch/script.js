function price() {
    // let url2 = "https://api1.binance.com/api/v3/ticker/price?symbol=ETHUSDC";
    // url2.toUpperCase
    let url = mountUrl();
    console.log(url);
    let result = document.getElementById("result");
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data),
            result.innerHTML = data.price
        });

}

function mountUrl() {
    let baseCoin = document.getElementById("base-coin").value.toUpperCase();
    let endCoin = document.getElementById("end-coin").value.toUpperCase();

    let url = `https://api1.binance.com/api/v3/ticker/price?symbol=${baseCoin}${endCoin}`;
    return url;
}

// const {
//     rejects
// } = require('assert');
// const fs = require('fs');
// const https = require('https');
// // const {
// //     resolve
// // } = require('path');

// exibirLista();

// async function exibirLista() {
//     var arrayAnus = [2011, 2015, 2012, 2014, 2016, 2019];

//     for (let index = 0; index < arrayAnus.length; index++) {
//         var filmes = await getMoviesByAno(arrayAnus[index]);
//         console.log(filmes.length, `FILMES DE ${arrayAnus[index]}, Uhuuul!`);
//         if (filmes.length > 0) {
//             console.log(filmes, 'FILMES!');
//         }
//     }
// }

// function getMoviesByAno(year) {
//     let url = `https://jsonmock.hackerrank.com/api/moviesdata?Year=${year}`;

//     return new Promise((resolve, reject) => {
//         https.get(url, function (response) {
//             var body = [];
//             var movieStars = [];

//             response.on('data', (movie) => {
//                 body.push(movie);
//             });

//             response.on('end', async () => {
//                 try {
//                     body = JSON.parse(Buffer.concat(body).toString());
//                     let json = body;
//                     for (let i = 0; i < json.data.length; i++) {
//                         movieStars.push(json.data[i].Title);
//                     }
//                 } catch (error) {
//                     console.error(error, 'error');
//                     reject(error);
//                 };
//                 resolve(movieStars);
//             });
//         }).on("error", (err) => {
//             console.log("Error: " + err.message);
//             reject(err);
//         }).end();
//     });
// }



// movieList.push(movie.Title);
// console.log(response);

// const https = require('https');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');
//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


// let movieList = [];
// let url = `https://jsonmock.hackerrank.com/api/moviesdata?Year=2015`;

// https.get(url, function (response) {
//     var data = response.data;

//     for (var i = 0; i < data.length; i++) {
//         movieList.push(data[i].Title);
//         data.le
//     }
//     resolve();
// }).on('error', (error) => {
//     reject(error);
// });
// console.log(movieList);
const express = require('express');
const fs = require('fs');

const app = express();

let fastText_wiki;
let word2vec_wiki;
let GLovE_wiki;
let histWords_1800;
let histWords_1850;
let histWords_1900;
let histWords_1950;
let histWords_1990;
fs.readFile('./data/fastText_wiki.json', (err, data) => {
    if (err) throw err;
    fastText_wiki = JSON.parse(data);
    console.log("loaded fastText_wiki");
    console.log(fastText_wiki.length);
});

fs.readFile('./data/word2vec_wiki.json', (err, data) => {
    if (err) throw err;
    word2vec_wiki = JSON.parse(data);
    console.log("loaded word2vec_wiki");
    console.log(word2vec_wiki.length);
});

fs.readFile('./data/GLovE_wiki.json', (err, data) => {
    if (err) throw err;
    GLovE_wiki = JSON.parse(data);
    console.log("loaded GLovE_wiki");
    console.log(GLovE_wiki.length);
});

fs.readFile('./data/1800_preprocessed.json', (err, data) => {
    if (err) throw err;
    histWords_1800 = JSON.parse(data);
    console.log('loaded histwords_1800');
    console.log(histWords_1800.length);
});

fs.readFile('./data/1850_preprocessed.json', (err, data) => {
    if (err) throw err;
    histWords_1850 = JSON.parse(data);
    console.log('loaded histwords_1850');
    console.log(histWords_1850.length);
});

fs.readFile('./data/1900_preprocessed.json', (err, data) => {
    if (err) throw err;
    histWords_1900 = JSON.parse(data);
    console.log('loaded histwords_1900');
    console.log(histWords_1900.length);
});

fs.readFile('./data/1950_preprocessed.json', (err, data) => {
    if (err) throw err;
    histWords_1950 = JSON.parse(data);
    console.log('loaded histwords_1950');
    console.log(histWords_1950.length);
});

fs.readFile('./data/1990_preprocessed.json', (err, data) => {
    if (err) throw err;
    histWords_1990 = JSON.parse(data);
    console.log('loaded histwords_1990');
    console.log(histWords_1990.length);
});


 

// const calculateSim = (data) => {
//     for(var i=0; i<data.models.length-1; ++i ){
//         for(var j=i+1; j<data.models.length; ++j){
//             let temp = {
//                 cmp_models: [data.models[i],data.models[j]],
//                 simValues: compute
//             }
//         }
//     }
// }

app.get("/dataset", (req, res) => {
    const database = [
        {
            id : 1,
            dataset: "WikiFeb2017",
            models: ['FastText', 'GloVe', 'Word2Vec'],
            modelData: {
                FastText: fastText_wiki, 
                Word2Vec: word2vec_wiki, 
                GloVe: GLovE_wiki,
            },
        },
        {
            id: 2,
            dataset: "HistWords",
            models: ['history1800','history1850','history1900','history1950','history1990'],
            modelData: {
                history1800: histWords_1800,
                history1850: histWords_1850,
                history1900: histWords_1900,
                history1950: histWords_1950,
                history1990: histWords_1990
            },
        },
      ];
    res.send({
        database
    });
});

// app.get("/wikidata", (req, res) => {
//     res.send({
//         modelData: {
//             FastText: fastText_wiki, 
//             Word2Vec: word2vec_wiki, 
//             GloVe: GLovE_wiki,
//         }
//     });
// });

// app.get("/histworddata", (req, res) => {
//     res.send({
//         modelData: {
//             history1800: histWords_1800,
//             history1950: histWords_1950,
//             history1850: histWords_1850,
//             history1900: histWords_1900,
//             history1990: histWords_1990
//         }
//     });
// });

console.log("App listening on 4000");
app.listen(4000);
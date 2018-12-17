let fs = require('fs')

const commonwords = fs.readFileSync(`${__dirname}/en_common_words`, {'encoding': 'utf8'}).split('\n')
const sorted = fs.readFileSync(`${__dirname}/en_sorted`, {'encoding': 'utf8'}).split('\n')

sorted.forEach( item => {
    if(commonwords.indexOf(item)<0) {
        console.log( item );
    }
})

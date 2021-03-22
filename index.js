const bs58check = require('bs58check')

const readline = require('readline');

const r = readline.createInterface({
      input: process.stdin,

})

function chk(addr){

    try {
       console.log(JSON.stringify({addr, len: addr.length}),',')
       bs58check.decode(addr)
        console.log(addr)
    } catch (e){
        //console.log(addr, e)
    }
}
console.log('[')

r.on('line', chk)
r.on('close', ()=>{console.log('{}]')})
/*
process.stdin.on('readable', () => {
        let chunk;
    while ((chunk = process.stdin.read()) !== null) {
            const line = chunk.toString('utf8').trim()
           try {
               bs58check.decode(line)
               console.log(line)
           } catch (e) {
           }
    };
})*/

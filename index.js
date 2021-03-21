const bs58check = require('bs58check')

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
})

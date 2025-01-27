const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the name of the file to create: ', (fileName) => {
    rl.question('Enter the content for the file: ', (content) => {
        fs.writeFileSync(fileName, content);
        rl.close();
    });
});
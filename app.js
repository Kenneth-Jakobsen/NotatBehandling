const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function create(){
    rl.question('Enter the name of the file to create: ', (fileName) => {
        rl.question('Enter the content for the file: ', (content) => {
            fs.writeFileSync(fileName, content);
            rl.close();
        });
    });
};

function menu(){
    console.log('1. Create a file');
    console.log('2. Read a file');
    console.log('3. Update a file');
    console.log('4. Delete a file');
    console.log('5. Exit');
    rl.question('Enter your choice: ', (choice) => {
        switch(choice){
            case '1':
                create();
                break;
            case '2':
                read();
                break;
            case '3':
                update();
                break;
            case '4':
                deleteFile();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Invalid choice');
                menu();
                break;
        }
    });
}

menu();
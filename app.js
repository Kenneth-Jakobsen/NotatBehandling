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

function read(){
    rl.question("Enter the name of the file you want to view:", (fileName)=>{
        fs.readFile(fileName, "utf-8",(err, data)=>{
            if(err){
                console.error("Error reading file: ", err);
                rl.close();
                return;
            }
            console.log("File content: ", data)
            rl.close();
        });
    });
};

function deleteFile(){
    rl.question("Enter the name of the file you wan to delete: ", (fileName)=>{
        fs.unlink(fileName,(err)=>{
            if(err){
                console.log("Error deleting file");
                return;
            }
            console.log(`${fileName} has been deleted`);
            rl.close();
        });
    });
};

function update() {
    rl.question("What file would you like to append? ", (fileName) => {
        rl.question("What content would you like to append? \n ", (content) => {
            fs.appendFile(fileName,content, (err) => {
                if (err) {
                    console.error("Error appending to the file:", err.message);
                } else {
                    console.log(`Successfully appended to ${fileName}`);
                }
                rl.close(); 
            });
        });
    });
}



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
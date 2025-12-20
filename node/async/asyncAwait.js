import fs from 'fs/promises';
let loading;

async function read(){
    loading=true;
    try{

        const users= await fs.readFile('node/data/users.json', 'utf-8');
        const posts= await fs.readFile('node/data/posts.json', 'utf-8');
        const comments= await fs.readFile('node/data/comments.json', 'utf-8');
        console.log(users);
    }catch(error){
        console.log("Error reading the file");
    }finally{
        console.log("Finally Completed");
        loading=false;
    }


}

read();
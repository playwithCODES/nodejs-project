//promises->Async programming , promise is a future value
//pending->fulfilled or rejected

import fs from 'fs/promises';
fs.readFile('node/data/data.txt', 'utf-8')
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

fs.readFile('node/data/users.json', 'utf-8')
.then((users)=>{
    console.log(users);
    return fs.readFile('node/data/posts.json', 'utf-8');
})
.then((posts)=>{
    console.log(posts);
    return fs.readFile('node/data/comments.json', 'utf-8');

}).then((comments)=>{
    console.log(comments);
})
.catch((error)=>{console.log(error)

});
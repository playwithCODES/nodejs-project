//callback: function used as a paramtere
//Higher order function : function who takes a functiom as a parameter
// The main function that accepts a number and multiple callback functions
function get(number, callback) {
  return callback(number); // Execute the callback on the number
}

// Function to get the remainder when divided by 3
function rem(num) {
  return num % 3;
}

// Function to multiply a number by 5
function multiply(num) {
  return num * 5;
}

// Function to square the number
function square(num) {
  return num * num;
}

// Using the get function with the nested callbacks
let number = 4;

// Here we're nesting the functions as callbacks
let numResult = get(number, (num) => square(multiply(rem(num))));

console.log(numResult); // Output the final result

//callback hell example
 
import fs from "fs";
fs.readFile("node/data/users.json", "utf8", (error, users) =>{
    if(error) throw error;
    const userList=JSON.parse(users);

    fs.readFile("node/data/posts.json", "utf8", (pError, posts) =>{
        if(pError) throw pError;
        const postList=JSON.parse(posts);

      const result=  userList.map(user=>{
            return {
                ...user,
                posts:postList.map(post=>post.userId===user.id? post : null).filter(Boolean),
            };
        });
    console.log(result);
});
});
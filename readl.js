let read = require('readline');
const fs = require ('fs'); //Importing fs module into readline moudle
const rl = read.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Please enter your name: ", (name) =>{
    fs.writeFileSync('./files/sophia.docx', name);// Changed the content to name
    //conditional statement
    //if (name == "Jemima"){
    //    console.log("Login successful");
    //}else{
     //   console.log("Wrong username");
   // }
    rl.close();
})
import os from "os";
console.log(os.totalmem()/ (1024*1024*1024) + " GB");
console.log(os.freemem()/ (1024*1024*1024) + " GB");
console.log(os.cpus());
console.log(os.platform());
console.log(os.version());
console.log(os.userInfo());
 
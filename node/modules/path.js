import path from "path";
import url from "url";

const filePath="folder1/folder2/folder3/folder4/file.txt";
//for fileName:path.basename()
const fileName=path.basename(filePath);
console.log(fileName);

//for extension:path.extname()
console.log(path.extname(filePath));

//for folders: path.dirname()
console.log(path.dirname(filePath));


//url
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
console.log(__dirname);
console.log(__filename);

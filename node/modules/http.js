import http from "http";
const server = http.createServer((request, response) => {
  //     console.log(request.method);
  //     console.log(request.url);
  // const user={
  //     "name":"Om Prakash Rajbanshi",
  //     "age":21,
  //     "faculty":"BSc.CSIT",
  //     "email":"omprakashrajbanshi627@gmail.com"
  // };
  //     response.writeHead(200,{"content-Type":"application/json"});
  //     // response.end("<h1>Hello Brother from this end </h1>");
  //     response.end(JSON.stringify(user));
  switch (request.method) {
    case "GET":
      switch (request.url) {
        case "/about":
          return response.end("About page");
        case "/contact":
          return response.end("Contact page");
        default:
            response.writeHead(404);
          return response.end("Page not found");
      }
    //   response.end("This is GET request");
    //   break;

    case "POST":
      response.end("This is POST request");
      break;

    default:
      response.writeHead(405);
      response.end("Method Not Allowed");
      break;
  }
});
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

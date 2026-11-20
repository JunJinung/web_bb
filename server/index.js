//http 모듈 불러오기
const http = require("http");
//fs 모듈 불러오기
const fs = require("fs");

const PORT = Number(process.env.PORT) || 3000;

//서버 생성
const server = http.createServer((req,res) =>{
    console.log("요청 발생");
    //console.log(req);
    console.log(req.method);
    //응답헤더
    //res.setHeader("Content-Type", "text/plain");
    //바다 전송
    //res.write("Hello node");
    //res.end(); //응답 종료
    //res.setHeader("Content-Type", "text/html");
    //const readStream = fs.createReadStream(__dirname+"/index.html", "utf8");
    //readStream.pipe(res);
    const {method, url} = req;
    res.setHeader("Content-Type", "text/plain");
    if (method === "POST" && url ==="/home") {
        res.statusCode = 200;
        res.end("HOME");
    } else if (method === "GET" && url ==="/about") {
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }

});
//서버 실행
server.listen(PORT, ()=>{
    console.log(`${PORT}번 포트로 서버 실행`);
});

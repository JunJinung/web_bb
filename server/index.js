//http 모듈 불러오기
const http = require("http");
//서버생성
const server = http.createServer((req,res)=>{
    console.log("요청 발생");
    //console.log(req);
    console.log(req,method);
    //응답헤더
    res.setHeader("Content-Type", "text/plain");
        //바다 전송
        res.write("Hello node");
        res.end();
});

//서버 실행
server.listen(3000, ()=>{
    console.log("3000번 포트로 서버 실행");
});
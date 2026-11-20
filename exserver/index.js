//exprss 모듈 불러오기
const express = require("express");
//서버생성
 const app = express();
 //포트 설정
 const PORT = Number(process.env.PORT) || 3000;

//라우팅 설정
app.get("/", (req, res)=>{
    res.status(200);
    res.send("Hello, node");
});
app.get("/users", (req,res)=>{
    res.status(200);
    res.send("get all users");
});
app.post("/users", (req,res)=>{
    res.status(200);
    res.send("create new users");
});
app.get("/user/:id", (req,res)=>{
    const userId = req.params.id;
    res.status(200);
    res.send(`${userId}사용자 정보 요청`);
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
});
 //서버 실행
 app.listen(PORT, ()=>{
    console.log(`${PORT}번 포트로 서버 실행`);
 })
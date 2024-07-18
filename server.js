import express, { json } from 'express';
    
const app = express();

app.use(express.static('public'));
app.use(json());

app.get('/', (_, response) => {
    response.sendFile('index.html');
});

const port = 3000; // 실행시킬 포트 번호를 port라는 변수에 할당
app.listen(port, 
    () => console.log(`http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중입니다.`)
);
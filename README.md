# NodeJS

### 1일차
#### NodeJS란?
 - Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임.
 - 웹 브라우저 밖에서도 JS를 사용할 수 있는 환경.

#### NodeJS의 장점
 - 하나의 언어로 FE/BE 개발이 가능하다.
 - 개발자 커뮤니티가 크고 다양하다.
 - 서드파티 모듈이 많다. (Node 회사 외 개발자가 만들어놓은 기능)

#### Http 모듈
 - NodeJS 내장 모듈을 사용하여 http 통신 가능.
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/3699c084-369d-459e-9894-b5c5da60598d)
  
 - setHeader, write, end 메소드 등 다양한 메소드 사용 가능.

#### 라우팅
 - 클라이언트에서 들어오는 요청에 따라 그에 맞는 함수를 실행하는 것.
 - 사용자 요청 url에 따라 다른 화면을 보여줄 수 있음.
 - GET, POST, PUT, DELETE 같은 요청 메소드에 따라 처리할 함수를 다르게 연결할 수 있음.
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/7e7486fc-3fd8-443f-9254-eb19310f0bbc)

#### Express
 - NodeJS를 사용하여 쉽게 서버를 구성할 수 있도록 하는 프레임워크.
 - HTTP 모듈 외 다양한 기능이 포함되어 있어서 사용.
    ex) 라우팅, 미들웨어, 템플릿 엔진, 정적 파일 지원 ...
 - 요청 경로와 함수에 따라 다른 결과를 보낼 수 있음.
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/269b13e4-da83-4939-825f-1e85be1e66ae)
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/bb8c5725-7cf5-421a-bbd1-d6f250de97d5)

 - 라우트 파라미터를 사용하여 특정 조건을 지정하고 요청을 보낼 수 있음.
   ex) ~/:user_ID


#### Express Req Properties
 - req.body : POST 요청 시 전송한 데이터를 담고 있다.
 - req.cookies : client에 저장된 cookie 정보를 서버에 전송했을 때의 데이터.
 - req.headers : 서버 요청 시 보낸 헤더 정보.
 - req.params : 라우트 파라미터가 포함되어 있을 때 파라미터 값.
 - req.query : query와 관련된 매개변수를 가지고 있음.

#### Express Res Method
 - req.download : 파일 내려받기.
 - res.json : json 응답 전송
 - res.redirect : 경로 재지정하여 이동.
 - res.send : 어떠한 데이터를 전달하고 싶을 때 사용.
 - res.status : 응답의 상태 코드를 설정.
   
   등... 다양한 속성이 있다.

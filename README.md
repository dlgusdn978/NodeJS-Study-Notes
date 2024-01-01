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


### 2일차
#### 미들웨어
 - 요청과 응답 중간에 있으면서 요청을 처리하거나 원하는 형태로 응답을 수정하는 기능을 가진 함수
 - 역할
   
    -> 요청 전처리 : 서버에 요청이 도착하기 전에 실행하는 작업을 담당. ex) 사용자 인증, 폼 value 검증 등

    -> 라우팅 처리 : 라우트 코드를 모듈화하여 관리하기 쉽게하는 역할 담당.
   
    -> 응답 처리 : 서버에서 클라이언트로 응답을 보낼 때 자료를 적절한 형태로 변환하거나 오류를 처리하는 작업 담당.

    ex) Application level middleware
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/9c8eb1d8-736b-4cbe-be16-b5d65f7997f1)

#### 라우터 미들웨어
 - express의 router 모듈을 활용하여 미들웨어를 지정할 수 있다.
 - 체이닝 형태로 동일한 요청 경로를 가지는 http method를 묶어서 선언할 수 있다.
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/0c0462ef-c859-4a04-bb10-bbc53437d391)
 - 아래와 같은 형태로 미들웨어를 할당하여 사용할 수 있다.
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/3dddb76c-1669-4fb3-a3b9-39e5ed3a50a1)
 - 동일한 경로를 가지는 요청들은 미들웨어 할당 경로를 변경시켜주어 중복되는 코드를 줄이고 유지보수성을 높일 수 있다.
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/d3444647-8a43-4451-ba22-6fc09555da86)
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/899f2be9-fb39-4d0a-8e7a-8108f7d0c233)

#### 바디파서 미들웨어
 - 서버로 요청을 보낼 때 요청 본문에 담긴 것을 파싱하는 미들웨어
 - 요청 본문의 자료형에 따라 다른 함수를 사용.
    ex) .json(), .urlencoded(), .raw()(바이너리 파일), .text()
   
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/cdc6f2de-cdc0-4730-8934-2d6385f7ca3a)

   -> req.body 를 통해 데이터를 사용할 수 있다.

#### dotenv
 - db id, pw 등 민감한 정보를 입력해야 할 때는 환경변수 파일을 따로 생성하여 작성한다. (.env)
 - dotenv 패키지를 설치하여 env에 있는 값을 읽어올 수 있다.
  
   ![image](https://github.com/dlgusdn978/NodeJS-Study-Notes/assets/73580422/898694b3-78a2-4d31-8771-5ea31802b699)

#### 스키마와 모델
 - 스키마(Schema) : 애플리케이션에서 사용할 자료의 형태를 정의하는 것.
 - 스키마 파일은 애플리케이션 코드와 분리하여 작성.
    -> 코드의 재사용성 ↑


#### 애플리케이션
 - 특정 기능을 제공하는 프로그램.
 - 사용자 인터페이스, 사용자와의 상호작용 등 모든 기능 포함

#### API
 - 애플리케이션 간에 자료를 주고받으며 특정 기능을 실행
 - api를 사용하면 다른 시스템끼리도 자료를 주고받을 수 있고, 새 애플리케이션 생성 가능.

#### MVC Pattern
 - 소스 코드는 수천, 수만 줄의 코드로 이루어져 있어, 기능이나 역할에 따라 폴더 및 파일로 나누고 이를 연결하여 사용.(디자인 패턴)
 - model, view, controller로 구분하여 사용

#### Model
 - 애플리케이션에서 처리할 대상.
 - db에 자료를 저장하거나 검색, 수정, 삭제 등을 수행하는 함수를 의미
 - 사용자의 요청만 처리. (view 관여하지 않음)

#### View
 - 사용자에게 컨트롤러나 모델의 처리 결과를 시각적으로 렌더링하여 보여줌.
 - 애플리케이션이나 홈페이지의 화면 등.
 - 서버에서 가져온 동적 자료를 표시하므로 템플릿 형태(``)로 처리.

#### Controller
 - 모델과 뷰 중간에 위치하여 사용자의 요청을 모델로 전달하거나 모델의 처리 결과를 뷰로 반환하는 역할을 수행.
 - Nodejs에서는 라우트 코드가 컨트롤러에 해당된다.
 - 코드를 가장 많이 작성하는 부분이기도 함.

#### AsyncHandler
 - 단순히 오류를 출력해야 하는 상황에서 사용하는 모듈.
 - try catch문을 일일히 입력해야하는 번거로움을 제거할 수 있음. (단, 예외 처리가 필수적인 상황에서는 사용하지 않음.)

const express = require("express");
const app = express();

app.set("port", process.env.PORT);
// 바디 파서 등록
app.use(express.json());

// 미들웨어 등록
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, () => {
  console.log("서버 실행");
});

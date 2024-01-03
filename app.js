const express = require("express");
const methodOverride = require("method-override");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("port", process.env.PORT);
// 바디 파서 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 미들웨어 등록
app.use("/contacts", require("./routes/contactRoutes"));
app.use(express.static("./public"));

app.use(methodOverride("_method"));

app.listen(3000, () => {
  console.log("서버 실행");
  console.log(process.env.PORT);
});

/* server.js 파일입니다 */
const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

/* 이부분에 3번 에서 만든 인증서 정보를 입력해야 합니다 */
const httpsOptions = {
  key: fs.readFileSync("./test.hambabwa.kr-key.pem"),
  cert: fs.readFileSync("./test.hambabwa.kr.pem"),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(
      "ready - started server on url: https://test.hambabwa.kr:" + port
    );
  });
});

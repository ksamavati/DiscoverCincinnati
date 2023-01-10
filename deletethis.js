import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
const app = express();
app.set("etag", "strong"); //browser caching of static assets should work properly
//logging
const accessLogStream = fs.createWriteStream(config.access_file, {
  flags: "a",
});
app.use(
  morgan(
    ':date[iso] :method :url :http-version :status ":referrer" ":user-agent" :remote-addr',
    { stream: accessLogStream }
  )
); //:method :url :response-time
//define all my services here
app.use("/ping", (req, res) => res.send("pong"));
//define the react-application here
app.use(
  "/mysub-application1",
  express.static(path.resolve(__dirname, `../public`))
); //optionally one can add some route handler to protect this resource?
app.get("/mysub-application1/*", (req, res) => {
  //this is required to support any client side routing written in react.
  res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

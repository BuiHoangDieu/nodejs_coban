import express from "express";
import configVE from "./config/configVE";
import 'dotenv/config';
import initWebRouter from "./routes/web";
// import connection from "./config/connectDB";

const app = express()
const port = process.env.PORT || 3000;

// config view engine 
configVE(app);


// init web router
initWebRouter(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
import express from "express";
import signIn from "./signin.mjs"

const app = express();

app.use(express.json())

const PORT = process.env.PORT;

app.post("/api/signin", signIn);


app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`)
})
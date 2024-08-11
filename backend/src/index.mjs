import express from "express";
import signIn from "./signin.mjs"
import { signUp } from "./signup.mjs";



const app = express();
const PORT = process.env.PORT;



app.use(express.json())


app.post("/api/signin", signIn);
app.post("/api/signup",signUp);

app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`)
})
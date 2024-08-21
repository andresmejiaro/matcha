import express from "express";
import signIn from "./routes/signin.mjs"
import { signUp } from "./routes/signup.mjs";
import { verifyJWT } from "./middleware/auth.mjs";


const app = express();
const PORT = process.env.PORT;



app.use(express.json());
app.use(verifyJWT);


app.post("/api/signin", signIn);
app.post("/api/signup",signUp);

app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`);
})
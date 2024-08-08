import express from "express";
import signIn from "./signin.mjs"
import { signUp } from "./signup.mjs";



const app = express();
const PORT = process.env.PORT;



app.use(express.json())


app.post("/api/signin", signIn);
app.post("/api/signUp",signUp);
// app.get("/api/testdb", async (req,res)=>{
//     let conn;
//     try {
//         conn = await pool.getConnection();
//         const rows = await conn.query("SELECT 1 as VAL");
//         res.json(rows)}
//     catch (err){
//             res.status(500).send(`An error occurred ${err}`);
//         }
//     finally{
//         if (conn) conn.release();
//     }
// });

app.post("api/signup",signUp);

app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`)
})
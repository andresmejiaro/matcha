import { createPasswordHash } from "./crypto.mjs";
import pool from "./db.mjs";

const checkCredentials = async (inputs) => {
    let conn;    
    try{
        conn = await pool.getConnection();
        const query = "SELECT count (username) as total from Users where username =(?) and PasswordHash = (?)"
        const passwordHashed = createPasswordHash(inputs.password, inputs.username);
        const result = await conn.query(query,[inputs.username, passwordHashed]);
        return result[0].total > 0;
    } catch(error){
        throw new Error(`DB connection error: ${error.message}}`)
    } finally{
        if (conn) conn.release();
    }
}


export const signIn = async (req, res) => {
    try{
        const inputs = {
            username: req.body.username,
            password: req.body.password,
        }
        const checkcred = await checkCredentials(inputs);
        console.log("can log in?", checkcred);
        if (!checkcred){
            return res.status(401).send({"success":false});
        }
        else 
            return res.status(201).send({"success":true});
    } catch (error){
        return res.status(500).send(error.message);
    }
}

export default signIn;
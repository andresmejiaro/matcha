import { createPasswordHash } from "./crypto.mjs";
import pool from "./db.mjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

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


const generateJWT = (username) => {
    const payload ={"username": username};
    const jwt_token = jwt.sign(payload, JWT_SECRET, {expiresIn:'1d'});
    return jwt_token;
}



export const signIn = async (req, res) => {
    try{
        const inputs = {
            username: req.body.username,
            password: req.body.password,
        }
        const checkcred = await checkCredentials(inputs);
        if (!checkcred){
            return res.status(401).send({"success":false});
        }
        else {
            const jwt_token = generateJWT(inputs.username);
            return res.status(201).cookie(
             'token',jwt_token, {
                httpOnly:true,
                sameSite: 'strict'
             }   
            ).send({"success":true});

        }
    } catch (error){
        return res.status(500).send(error.message);
    }
}

export default signIn;  
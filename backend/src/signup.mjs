import pool from "./db.mjs";
import { createPasswordHash } from "./crypto.mjs";

const validators = async (email,password) =>{
    
    const conn = await pool.getConnection();
    const query = "select count(Email) as total from Users where Email=(?)";
    const result = await conn.query(query,[email]);
    const total = result[0].total;
    
    if (total > 0){
        return false;
    }


    return true;
}


export const signUp = async (req, res) => {
    console.log(req.body)
    
    const email = req.body.email;
    const password = req.body.password;

    const validation = await validators(email,password);

    // if (!validation){
    //     return;
    // }
    
    const passwordHashed = createPasswordHash(password,email);

    const conn = await pool.getConnection();
    const query = "INSERT INTO Users (Email, PasswordHash) VALUES (?,?)";
    const result = await conn.query(query,[email,passwordHashed]);
    res.json({ message: 'User inserted successfully', insertId: result.insertId });

}
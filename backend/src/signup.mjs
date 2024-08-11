import pool from "./db.mjs";
import { createPasswordHash } from "./crypto.mjs";

const validators = async (signupData) =>{
    
    const conn = await pool.getConnection();
    const query = "select count(username) as total from Users where username=(?)";
    const result = await conn.query(query,[signupData.username]);
    const total = result[0].total;
    
    if (total > 0){
        return [false, "user already exists"];
    }


    return [true, NULL];
}


export const signUp = async (req, res) => {
    try{
        console.log(req.body)
        
        const signupData = req.body;
   
   
        const [validation, cause] = await validators(signupData);
    
        if (!validation){
            const passwordHashed = createPasswordHash(signupData.password,signupData.username);
        
            const conn = await pool.getConnection();
            const query = "INSERT INTO Users (UserName, PasswordHash) VALUES (?,?)";
            const result = await conn.query(query,[signupData.username,passwordHashed]);
            res.json({ message: 'User inserted successfully', insertId: result.insertId });
        } else {
            res.status(408).json({message:cause})
        }
    } catch (error){
        res.status(500).json({message:"An error occured", error: error.message})
    }
    //     return;
    // }
}
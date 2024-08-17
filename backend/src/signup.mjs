import pool from "./db.mjs";
import { createPasswordHash } from "./crypto.mjs";
import { sanitizeObject } from "./utils.mjs";

const checkInputs = (inputs) => {
    // Password confirmation check
    if (inputs.password !== inputs.confirm_password) {
      return false;
    }
    // Check length
    if (inputs.password.length < 8) {
      return false;
    }
    // Password complexity
    if (!/[A-Z]/.test(inputs.password)) {
      return false;
    }
    if (!/[a-z]/.test(inputs.password)) {
      return false;
    }
    if (!/\d/.test(inputs.password)) {
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputs.password)) {
      return false;
    }
    return true;
  };

const validators = async (signupData) =>{
  try{
    const conn = await pool.getConnection();
    const query = "select count(username) as total from Users where username=(?)";
    const result = await conn.query(query,[signupData.username]);
    const total = result[0].total;
    return !(total > 0) && checkInputs (signupData);
  } catch(error){
    throw new Error(`DB connection error: ${error.message}`);
  } finally{
    if (conn) conn.release();
  }
}


export const signUp = async (req, res) => {
    try{
        //console.log(req.body)
        
        const signupData = sanitizeObject(req.body);
   
        const validation = await validators(signupData);
        //console.log(validation)

        if (validation){
        
            const passwordHashed = createPasswordHash(signupData.password,signupData.username);
        
            const conn = await pool.getConnection();
            const query = "INSERT INTO Users (UserName, PasswordHash) VALUES (?,?)";
            const result = await conn.query(query,[signupData.username,passwordHashed]);
            res.status(201).json({ message: 'User inserted successfully', insertId: result.insertId , success:true});
        } else {
            res.status(408).json({message:'Something is wrong with the sent data please try again',success:false});
        }
    } catch (error){
        res.status(500).json({message:"An error occured", error: error.message, success:false})
    }
    //     return;
    // }
}
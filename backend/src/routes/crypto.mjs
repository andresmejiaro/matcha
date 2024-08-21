import crypto from "crypto";

const PEEPER = process.env.PEPPER

export const createPasswordHash = (password,salt) => {
    const hash = crypto.createHmac('sha256', PEEPER)
                .update(password + salt)
                .digest('hex');
    return hash;
}

export const verifyPassword = (hash, password, salt) => {
    const hash2 = crypto.createHmac('sha256', PEEPER)
                .update(password + salt)
                .digest('hex');
    return hash===hash2;   
}
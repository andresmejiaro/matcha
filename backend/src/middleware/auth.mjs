import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET;


export const verifyJWT = (req, res, next) => {
    try {
        const token = req.cookies.token;
    
    
        if (!token){
            req.isAuth = false;
            req.username = '';
            return next();
        }
        const decoded = jwt.verify(token,JWT_SECRET);
            req.username = decoded.username;
            req.isAuth = true;
        }
    catch {
        res.cookie(
            'token','',{
                httpOnly:true,
                sameSite:'strict',
                expires: new Date(0),
            }
        )
        req.username = '';
        req.isAuth = false;
    }
    next();
}
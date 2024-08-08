

const checkCredentials = (email, passoword) => {
    return true;
}


export const signIn = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    if (!checkCredentials(email,password)){
        return res.status(400).send("error")
    }
    else 
        return res.status(201).send({"success":true})
}

export default signIn;


const checkCredentials = (email, passoword) => {
    return true;
}


export const signIn = (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    console.log(email, password)
    if (!checkCredentials(email,password)){
        return res.status(400).send("error")
    }
    else 
        return res.status(201).send({"success":true})
}

export default signIn;
import  User  from "../models/User";

const signup = async(req, res, next) => {
    try {
        const existingUser = await User.findOne({email: req.body.email})
        if (existingUser){
            const error = new Error("Email déjà utilisé!");
            error.statusCode = 403;
            throw error;
        }
        let user = new User();
        user.email = req.body.email;
        user.password = await user.encryptPassword(req.body.password);
        user.name = req.body.name;
        user = await user.save();
        res.send(user);
    } catch (err) {
        next(err)
    }
}

const login = async(req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email}).select('+password');
        if(!user) {
            const error = new Error("vous vous ètes trompé d'email!");
            error.statusCode = 401;
            throw error;
        }
        const validPassword = await user.validPassword(password, user.password);
        if(!validPassword) {
            const error = new Error('vous vous ètes trompé de mot de passe!');
            error.statusCode = 401;
            throw error;
        }
        res.send({msg: "vous ètes connecté!", user})
    } catch (err) {
        next(err);
        
    }
}


export {signup, login};
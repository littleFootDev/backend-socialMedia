import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

const userSchema = new Schema({
    name : {type: String, required: true, min: 4, max: 25},
    email: {type: String, required: true, min: 8}, 
    password: {type: String, required: true, min: 6}

})
userSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(5);
    const hash = bcrypt.hash(password, salt);
    return hash;
}
userSchema.methods.validPassword = async(candidatePassword, oldPassword) => {
    const result = await bcrypt.compare(candidatePassword, oldPassword);
    return result;
}

const User = mongoose.model('user', userSchema );

export default User;
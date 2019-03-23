import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    date: String,
    lastModifiedDate: Date
});

userSchema.pre('save', function(next) {
    this.lastModifiedDate = new Date();
    next();
});

export default mongoose.model('User', userSchema);
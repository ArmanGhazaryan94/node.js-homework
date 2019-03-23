import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: String,
    body: String,
    lastModifiedDate: Date
});

productSchema.pre('save', function(next) {
    this.lastModifiedDate = new Date();
    next();
});

export default mongoose.model('Product', productSchema);
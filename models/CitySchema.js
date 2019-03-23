import mongoose, { Schema } from "mongoose";

const citySchema = new Schema({
   name: {
      type: String,
      required: [true, 'Name is required']
   },
   country: {
      type: String,
      required: [true, 'Country is required']
   },
   capital: {
      type: String,
      required: [true, 'Capital is required']
   },
   location: Object,
   lastModifiedDate: Date
});

citySchema.pre('save', function(next) {
   this.lastModifiedDate = new Date();
   next();
});

export default mongoose.model('City', citySchema);
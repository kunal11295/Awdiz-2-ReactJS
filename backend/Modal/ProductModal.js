import mongoose from "mongoose"
import { Schema } from "mongoose"

const product = new Schema
({
    name:String,
    price:String,
    category:String,
    image:[String]
});

export default mongoose.model("Products",product)

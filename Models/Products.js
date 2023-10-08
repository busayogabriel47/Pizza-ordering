import mongoose, { model } from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength: 60
    },

    desc:{
        type: String,
        required: true,
        maxlength: 250
    },
    img:{
        type: String,
        required: true
    },
    prices:{
        type: [Number],
        required: true,
    },
    title:{
        type: String,
        required: true,
        maxlength: 60
    },
    extraOptions: {
        type: [
            {
                text: {type: String, required: true},
                price: {type: Number, required: true}
            }
        ]
    }


}, 

{timeStamps: true})


export default mongoose.models.Products ||
mongoose.model("Products", ProductSchema);
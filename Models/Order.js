import mongoose, { model } from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer:{
        type: String,
        required: true,
        maxlength: 200
    },
    address:{
        type: String,
        required: true,
        maxlength: 200
    },

    total:{
        type: Number,
        required: true
    },

    status:{
        type: Number,
        default: 0
    },
    method:{
        type: Number,
        required: true
    },


}, 

{timeStamps: true})


export default mongoose.models.Order ||
mongoose.model("Order", OrderSchema);
import dbConnect from "../../../../utilities/mongo";
import Product from "../../../../Models/Products";

export default async function handler(req, res){
    const {
        method, 
        query: {id}} 
    = req;

    dbConnect()

    if(method === "GET"){
        try {
            
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if(method === "PUT"){
        
    }

    if(method === "DELETE"){
        try {
            await Product.findByIdAndDelete(id)
            res.status(200).json("The product has been deleted!")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
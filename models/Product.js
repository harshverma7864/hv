const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pname : {type : String , required :true},
    desc : {type : String , required :true},
    price : {type : Number , required :true},
    rating : {type : Number , required :true},
    category : {type : String , required :true},
    subcategory : {type : String , required :true},
    image1 : {type : String , required :true},
    image2 : {type : String , required :true},
    image3 : {type : String , required :true},
    image4 : {type : String , required :true},
    modelurl : {type : String , required :true},
    reviews : {type : Array , required :true},
    Type : {type : String , required :true}
} , {timestamps:true});

mongoose.models = {}
export default mongoose.model("Products", productSchema);


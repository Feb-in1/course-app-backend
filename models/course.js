const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "desc":String,
        "date":String,
        "dur":String,
        "ven":String,
        "tnam":String
    }
)
let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}




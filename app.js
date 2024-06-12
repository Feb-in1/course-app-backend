const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { coursemodel } = require("./models/course.js")


const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://feb:febin4475@cluster0.pydodfi.mongodb.net/CourseDb?retryWrites=true&w=majority&appName=Cluster0")






app.post("/", (req, res) => {
    let input = req.body
    let course = new coursemodel(input)
    course.save()
    res.json({ "status": "Success" })
})



app.post("/search", (req, res) => {
    let input = req.body
    coursemodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )

})




app.post("/delete", (req, res) => {
    let input=req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"Success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":error})
        }
    )
     
})
app.get("/ViewAll", (req, res) => {
    coursemodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch((error) => {
        res.json(error)
    })

})





app.listen(8082, () => {
    console.log("Server Started")
})

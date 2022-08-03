const express = require("express")
const app = express()
app.listen(3000)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.send("Hello")
    console.log("Here")
})
 
// new folder -> router -> const router = express() <=> app
//module.exports = router
// const userRouter = require("./routes/users")
//app.use("/users",useRouter)
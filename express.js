const express = require('express')
const app = express()
app.set("view engine", "ejs");
const port = 3000
const bodyParser=require("body-Parser")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.post('/',function(req,res){
  var email=req.body.email
  var name=req.body.name
  res.send(email+name)

})




app.get('/', (req, res) => {
  var today=new Date()
  var currentDay=today.getDay()
  var day=""

  if(currentDay===6 || currentDay===0){
    day="weekend"
    res.render("list",{kindOfDay:day})
  }
  else{
    day="weekday"
    res.render("list",{kindOfDay:day})

  }
})

app.listen(process.env.port || 3000, () => {
  console.log(`Example app listening on port ${port}`)
})


// 7ad72c6e1bec3dcee39b30acc1086711-us12
// 85feba739a
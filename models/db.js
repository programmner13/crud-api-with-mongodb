const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/EmpDb",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connection success"))
.catch((err)=>console.log(err));

require("./employee.model");

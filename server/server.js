const express = require("express")
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
app.use(cors());

app.use(express.json());

const mongoUrl =  ""

const JWT_SECRET = "123123123012405430"
mongoose
.connect(mongoUrl, {
    useNewUrlParser: true
})
.then (()=> {
    console.log("Connected to database");
})
.catch((e)=> console.log(e));

require("./schemas/userDetails");

const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { email,nick, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      email,
      nick,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});


app.post("/login", async (req,res)=> {
    const {email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user) {
        return res.json({error: "User Not found"})
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({email:user.email}, JWT_SECRET);
        if (res.status(201)) {
            return res.json({ status: "ok", data: token})

        }else {
            return res.json({error: "no"})
            
        }
        }
        res.json({status: "no", error: "Wrong Password"})
})

app.post("/userinfo", async (req,res) => {
    const { token } = req.body;
    try {
       const user=jwt.verify(token,JWT_SECRET);
        const useremail= user.email;
        User.findOne({email: useremail}).then((data) => {
            res.send({ status: "ok", data: data})
        })
        .catch((error) => {
            res.send({status: "error", data: error})
        })
    } catch (error) {
        
    }
})





app.listen(5000,() => {
    console.log("hello world")
})

const express = require('express');
const cors = require('cors');
const { execNode, execPython, execCpp } = require('./utils/executor');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true
}))
app.get('/', (req, res) => {
  res.send("First server!!")
});
app.post("/execNode", async(req, res)=>{
  
  const data = req.body.code;
  // console.log(data);
  const output = await execNode(data);
  console.log(output);
  res.send(output);
})
app.post("/execPython", async(req, res)=>{
  
  const data = req.body.code;
  // console.log(data);
  const output = await execPython(data);
  console.log(output);
  res.send(output);
})

app.post("/execCpp", async(req, res)=>{
  
  const data = req.body.code;
  // console.log(data);
  const output = await execCpp(data);
  console.log(output);
  res.send(output);
})
app.listen(PORT, ()=>
{
  console.log("Server started!!");
});
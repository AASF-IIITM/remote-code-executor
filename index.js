const express = require('express');
const cors = require('cors');
const { execNode } = require('./utils/executor');
const app = express();

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
app.listen(3000, ()=>
{
  console.log("Server started!!");
});
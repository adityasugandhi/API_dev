var express = require('express');
var router = express.Router();
const app = express()
/* GET users listing. */
port = 3000
router.get('/',(req,res)=>{
  res.send('User List');
})
router.get("/new",(req,res)=>{
  res.send("User New form")
})
module.exports = router;
app.listen(port)


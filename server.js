const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});


 app.post('/', function(req, res) {
    let weight = Number(req.body.weight) ;
    let height = Number(req.body.height)/100;
    let result = weight / (height * height);
   // console.log(result);
  //  res.send(`${weight} / ${height} * ${height} = ${result}`);
    if(result<19)
    {
        res.send(`Sa oled alakaalus`);
    }
    if(result>19 && result<24.9)
    {
        res.send(`Sa oled normaalkaalus`);
    }
    if(result>25 && result<29,9)
    {
        res.send(`Sa oled ülekaalus`);
    }
    if(result > 30)
    {
        res.send(`Sa oled rasvunud`);
    }
    else{
        alert("Check Your data")
    }
    
 });

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});

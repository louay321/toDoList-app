const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = [];
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  var weekdays = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ''];
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  if(currentDay == 6 || currentDay == 0){
    day = "Weekend";
  }
  else{ day = weekdays[currentDay];}
  res.render('list', {todayIs: day, newListItem : items});
});

app.post("/", function(req, res){
  items.push(req.body.newItem);
  res.redirect("/")
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});

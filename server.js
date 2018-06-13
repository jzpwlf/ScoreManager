/*
** 学生成绩记录（增删改查）敏捷Web 小组作业
** Server部分  
// **伍懿、徐一飞完成
*/
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/listRoutes'); //importing route
routes(app); //register the route
app.use(function(req, res) {
  res.sendfile("./html/index.html");
  //res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
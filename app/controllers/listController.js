//伍懿完成
const todoListRepository = require("../repositories/ListRepository");

exports.listAllTodos = function(req, res) {
  const todoList = todoListRepository.listAllTodos();
  res.json(todoList);
};
exports.filterTodo = function(req, res) {
  //res.json({ message: 'Update successed!'});
  const todoList = todoListRepository.filterTodos(req.body);
  res.json(todoList);
};
exports.createTodo = function(req, res) {
  todoListRepository.createTodo(req.body);
  //res.status(201).end();
  res.json({ message: 'Add successed!'});
};

// exports.readTodo = function(req, res) {
//   const todo = todoListRepository.findTodoBy(req.params.studentId);
//   res.json(todo);
// };

exports.updateTodo = function(req, res) {
  if(todoListRepository.updateTodo(req.body))
  {
    res.json({ message: 'Update successed!'});
  }
  else{
    res.json({ message: 'No this ID:'+req.body.studentId });
  }
};

exports.deleteTodo = function(req, res) {
  if(todoListRepository.deleteTodoBy(req.body))
  {
    res.json({ message: 'Delete successed!'+ req.body.studentId});
  }else
  {
    res.json({ message: 'No this ID'+req.body.studentId });
  }
};
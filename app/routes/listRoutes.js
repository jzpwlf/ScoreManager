//徐一飞完成
module.exports = function(app) {
    const todoList = require('../controllers/listController');
  
    // todoList Routes
    app.route('/list')
      .get(todoList.listAllTodos)
      .post(todoList.createTodo);
  
    app.route('/addRecord')
      .post(todoList.createTodo);

    app.route('/deleteRecord')
      .post(todoList.deleteTodo);

    app.route('/updateRecord')
      .post(todoList.updateTodo);

    app.route('/filterRecord')
      .post(todoList.filterTodo);
    // app.route('/todos/:todoId')
    //   .get(todoList.readTodo)
    //   .put(todoList.updateTodo)
    //   .delete(todoList.deleteTodo);
  };
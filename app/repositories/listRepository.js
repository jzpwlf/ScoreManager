//李静、张昕昳完成

const Todo = require("../models/todo");

let currentId = 0;

class ListRepository {
  constructor() {
    // const todo1 = new Todo(++currentId, "JZP", "JiaZhanPei");
    // const todo2 = new Todo(++currentId, "HA", "Hu An");
    const todo1 = new Todo("2113601022", "JZP", 98);
    const todo2 = new Todo("2113601023", "HA", 60);
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    var strArray = [];
    for(var i = 0;i<this.todoList.length;i++)
    {
        strArray.push("studentId:"+this.todoList[i].studentId+" name:"+this.todoList[i].name+" score:"+this.todoList[i].score);
    }
    return strArray;
  }

  filterTodos(reqBody) {
    //实现查看所有todos的方法
    var strArray = [];
    for(var i = 0;i<this.todoList.length;i++)
    {
      if(this.todoList[i].score >= reqBody.minScore && this.todoList[i].score <= reqBody.maxScore)
        strArray.push("studentId:"+this.todoList[i].studentId+" name:"+this.todoList[i].name+" score:"+this.todoList[i].score);
    }
    return strArray;
  }

  // findTodoBy(id) {
  //   //实现通过id查看具体todo的方法
  //   for(var i = 0;i<this.todoList.length;i++)
  //   {
  //       if(this.todoList[i].id == id)
  //           return "id:"+this.todoList[i].id+" name:"+this.todoList[i].name+" description:"+this.todoList[i].description;
  //   }
  //   return "No This ID:" + id;
  // }

  createTodo(reqBody) {
    //实现创建新todo纪录的方法
    this.todoList.push(new Todo(reqBody.studentId, reqBody.name, reqBody.score));
  }

  updateTodo(reqBody) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    for(var i = 0;i<this.todoList.length;i++)
    {
        if(this.todoList[i].studentId == reqBody.studentId)
        {
            this.todoList.splice(i,1);
            this.todoList.push(new Todo(reqBody.studentId, reqBody.name, reqBody.score));
            return true;
        }          
    }
    return false;
  }

  deleteTodoBy(reqBody) {
    //实现通过id来删除todo纪录的方法
    for(var i = 0;i<this.todoList.length;i++)
    {
        if(this.todoList[i].studentId == reqBody.studentId)
        {
            this.todoList.splice(i,1);
            return true;
        }          
    }
    return false;
  }
}

module.exports = new ListRepository();
//余嘉晨完成
class Todo {
    constructor(studentId, name, score) {
      this.studentId = studentId;
      this.name = name;
      this.score = score;
      this.isFinished = false;
      this.createdAt = new Date();
    }
  }
  
  module.exports = Todo;
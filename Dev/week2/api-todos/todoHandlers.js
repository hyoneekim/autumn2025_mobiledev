const Todos = require("./todoLib.js")


 const getAllTodos = (req, res) => {
    const todos = Todos.getAll();
    res.json(todos);
 };

const createTodo = (req, res) => {
    const {task, completed, dueDate} = req.body;

    const newToDo = Todos.addOne(task, completed, dueDate);

    if(newToDo) {
        res.json(newToDo);
    } else {
        res.status(500).json({ message: "Failed to create a To-do."})
    }

};


const getTodoById = (req,res) => {
    const numericID = req.params.numericID;
    const todo = Todos.findById(numericID);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({message: 'To-do not found!'})
    }

};

const updateTodo = (req, res) => {
    const toDoId = req.params.toDoId;
    const { task, completed, dueDate} = req.body;
    const updatedTodo = Todos.updateOneById(toDoId, {task, completed, dueDate});

    if(updateTodo){
        res.json(updatedTodo);
    } else {
        res.status(404).json({ message: "To-do not found!!"});
    }

};

const deleteTodo = (req, res) => {
  const toDoId = req.params.toDoId;

  const isDeleted = Todos.deleteOneById(toDoId);

  if (isDeleted) {
    res.json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

module.exports = {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
};


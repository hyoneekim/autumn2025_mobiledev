let todosArray = [];
let nextId = 1;

function addOne (task, completed, dueDate) {
    if(!task||!completed||!dueDate){
        return false;
    }

    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;

}

function getAll() {
    return todosArray;
}

function findById (id) {
    const numericID = Number(id);
    const todo = todosArray.find(item => item.id ===numericID);
    return todo || false;

}

function updateOneById(id, updatedData){
    const todo = findById(id);
    if(todo){
        if(updatedData.task) todo.task = updatedData.task;
        if(updatedData.completed) todo.completed = updatedData.completed;
        if(updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo;
    }
    return false;

}

function deleteOneById(id){
    const todo = findById(id);
    if(todo){
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(todo => todo.id !== Number(id));
        return todosArray.length < initialLength;
    }
    return false;
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;
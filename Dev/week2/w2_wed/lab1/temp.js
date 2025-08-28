//import ToDos from "./todoLib";

const ToDos = require("./todoLib")

ToDos.addOne("laundry", "No", "Tomorrow");
ToDos.updateOneById(1,{dueDate : "Friday"})

console.log(ToDos.getAll());


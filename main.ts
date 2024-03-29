#! /usr/bin/env node

import inquirer from "inquirer"

let todos: string[] = ["chocolates", "lime-juice", "ice-cream", "candies"]

async function createTodo (todos:string[]) {
    do{
        let ans = await inquirer.prompt({
            type : "list",
            message : "select an operation",
            name : "select",
            choices : ["add", "update", "view", "delete"]
        })
        if(ans.select == "add"){
            let addTodo = inquirer.prompt({
                type : "input",
                message : "add items in to do!",
                name : "todo",
            });
            todos.push((await addTodo).todo)
            console.log(todos)
        }
        if(ans.select == "update"){
            let updateTodo = await inquirer.prompt({
                type: "list",
                message : "select item for update..",
                choices :todos.map(item => item),
                name : "todo",
            })
            let addTodo = inquirer.prompt({
                type : "input",
                message : "add items in to do!",
                name : "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo)
            todos = [...newTodo,(await addTodo).todo]
            console.log(todos)
        }
        if(ans.select == "view"){
            console.log(todos)
        }
        if(ans.select == "delete"){
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message : "select item for delete..",
                choices :todos.map(item => item),
                name : "todo",
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo)
        todos=[...newTodo];
        console.log(todos);
    }

}while(true) 
}
createTodo(todos);
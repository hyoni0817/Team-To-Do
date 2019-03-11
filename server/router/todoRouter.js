const express = require('express');
const Todo = require('../model/todo.js');
const router = express.Router();

router.route('/todolist')
    .get(showTodoList)
    .post(addNewTodo)

function showTodoList(req, res){
    Todo.getTodoList((err,result) => {
        if(err) {
            res.status(500).send({msg : 'showTodoList fail.'});
            return;
        }
        res.send(result);
    })
}

function addNewTodo(req, res){
    console.log(req.body);
}


module.exports = router;
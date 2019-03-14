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
    var date = new Date();

    const title =  req.body.TITLE;
    const deadline =  req.body.END_DT;
    const contents =  req.body.CONTENT;
    const participant =  req.body.PARTICIPANT;
    const emergency =  req.body.EMERGENCY_FL;
    const saveDt = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();


    Todo.saveTodo(title, deadline, contents, participant, emergency,  saveDt, (err, result) => {
        if(err) {
            res.status(500).send({msg: 'saveTodo error'});
            return;
        }

        if(err) return next(err);

        return res.send(result);
    })
}


module.exports = router;
const pool = require('./dbConnection.js');
class Todo {}

Todo.getTodoList = function(callback) {
    pool.getConnection ((err, conn) => {
        if(err) return callback(err, null);
        

        const sql = 'select WRITE_NO, TITLE, DATE_FORMAT(END_DT,"%Y-%m-%d") as END_DT, PARTICIPANT, EMERGENCY_FL from todolist_tb order by EMERGENCY_FL desc, END_DT asc';
        conn.query(sql, (err, result) => {

            if(err) {
                console.error('Error : ', err);
                callback(err, null);
                conn.release();
                return;
            }

            conn.release();
            callback(null, result)
        })
    })
}

Todo.saveTodo = function(title, deadline, contents, participant, emergency,  saveDt, callback) {
    pool.getConnection ((err, conn) => {
        if(err) return callback(err, null);
        

        const sql = 'insert into todolist_tb set ?';
        const values = {TITLE: title, SAVE_DT:saveDt, END_DT:deadline, CONTENT:contents, PARTICIPANT:'\''+participant+'\'', INCOMPLETE:participant, EMERGENCY_FL:emergency}
        conn.query(sql, values, (err, result) => {
            if(err) {
                console.error('Error : ', err);
                callback(err, null);
                conn.release();
                return;
            }

            conn.release();
            callback(null, {msg : 'save todo success'})
        })
    })
}

module.exports = Todo;
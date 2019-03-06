const pool = require('./dbConnection.js');
class Todo {}

Todo.getTodoList = function(callback) {
    pool.getConnection ((err, conn) => {
        if(err){
            conn.release();
            return callback(err, null);
        } 

        const sql = 'select WRITE_NO, TITLE, DATE_FORMAT(END_DT,"%Y-%m-%d") as END_DT, PARTICIPANT, EMERGENCY_FL from todolist_tb order by EMERGENCY_FL desc, END_DT asc';
        conn.query(sql, (err, result) => {
            console.log(result);
            conn.release();
            callback(null, result)
        })
    })
}

module.exports = Todo;
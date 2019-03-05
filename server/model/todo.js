const pool = require('./dbConnection.js');
class Todo {}

Todo.getTodoList = function(callback) {
    pool.getConnection ((err, conn) => {
        if(err) return callback(err, null);

        const sql = 'select WRITE_NO, TITLE, DATE_FORMAT(END_DT,"%Y-%m-%d") as END_DT, PARTICIPANT, EMERGENCY from todolist_tb order by EMERGENCY desc, END_DT asc';
        conn.query(sql, (err, result) => {
            console.log(result);
            callback(null, result)
        })
    })
}

module.exports = Todo;
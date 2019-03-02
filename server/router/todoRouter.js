const express = require('express');
const router = express.Router();

router.route('/todolist')
    .get(showTodoList)

function showTodoList(req, res){
    res.json([
        {
            id: 0,
            complete: false,
            title: '코딩하기',
            participant: ['지훈', '민현']
        },
        {
            id: 1,
            complete: true,
            title: '자바스크립트 인강듣기',
            participant: ['나영', '성우']
        },
        {
            id: 2,
            complete: false,
            title: '영어 공부하기',
            participant: ['나현', '민현']
        }
    ]);
}

// router.get('/todolist', function(req, res, next) {
// 	// Comment out this line:
//   //res.send('respond with a resource');

//   // And insert something like this instead:
//     res.json([
//         {
//             id: 0,
//             complete: false,
//             title: '코딩하기',
//             participant: ['지훈', '민현']
//         },
//         {
//             id: 1,
//             complete: true,
//             title: '자바스크립트 인강듣기',
//             participant: ['나영', '성우']
//         },
//         {
//             id: 2,
//             complete: false,
//             title: '영어 공부하기',
//             participant: ['나현', '민현']
//         }
//     ]);
// });

module.exports = router;
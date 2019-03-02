const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser'); //이걸 써야 body값을 받는다.
const app = express();
const port = process.env.PORT || 5000;

const todoRouter = require('./router/todoRouter.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(todoRouter);

app.use((err, req, res, next) => {
  res.send({error: err.message});
})

app.listen(port, () => console.log(`Listening on port ${port}`));
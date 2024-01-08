// const express = require('express');
// const app = express();
// const router = express.Router();
// const port = 3000
// const connection = require("./connection");

// // app.get('/', (req, res) => {
// //     console.log('inside APPING-->', connection);
// //     res.send('hello world')
// // });


// ///reading product
// app.get('/read',(req,res,next)=>
// {
//    console.log('inside get -->',req);
//     var query = "select * from  PRODUCT ";
//     connection.query(query,(err,results)=>
//     {
//         if(!err)
//         {
//             return res.status(200).json(results);
//         }
//         else return res.status(500).json(err);

//     });
// });









// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });
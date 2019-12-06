import express from 'express';
import todoController from '../controller/todos.js';


const router = express.Router();
//routes directed to controller
router.get('/api/v1/todos', todoController.getAllTodos);
router.get('/api/v1/todos/:id', todoController.getTodo);
router.post('/api/v1/todos', todoController.createTodo);
router.put('/api/v1/todos/:id', todoController.updateTodo);
router.delete('/api/v1/todos/:id', todoController.deleteTodo);

export default router;

// // get all todos
// router.get('/api/v1/todos', (req, res) => {
//     res.status(200).send({
//         success: 'true',
//         message: 'Data retrieved successfully',
//         todos: db
//     })
// });
// //get single item from api
// router.get('/api/v1/todos/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     db.map((todo) => {
//         if (todo.id === id) {
//             return res.status(200).send({
//                 success: 'true',
//                 message: 'todo retrieved successfully',
//                 todo,
//             });
//         }
//     });
//     return res.status(404).send({
//         success: 'false',
//         message: 'todo does not exist',
//     });
// });

// // post new todos
// router.post('/api/v1/todos', (req, res) => {
//     if (!req.body.title || !req.body.description) {
//         return res.status(400).send({
//             success: 'false',
//             message: 'Please provide a title and/or description for your item'
//         });
//     }
//     const todo = {
//         id: db.length + 1,
//         title: req.body.title,
//         description: req.body.description
//     }
//     db.push(todo);
//     return res.status(201).send({
//         success: 'true',
//         message: 'todo added successfully',
//         todo
//     })
// });

// //  router delete todos
// router.delete('/api/v1/todos/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     if (!req.params.id) {
//         return res.status(400).send({
//             success: 'false',
//             message: 'Please specify an id to delete an item, thanks -management'
//         })
//     }
//     db.map((todo, index) => {
//         if (todo.id === id) {
//             db.splice(index, 1);
//             return res.status(200).send({
//                 success: 'true',
//                 message: 'Todo deleted successfuly',
//             });
//         }
//     });


//     return res.status(404).send({
//         success: 'false',
//         message: 'todo not found',
//     });


// });
// // router update todos

// router.put('/api/v1/todos/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     let todoFound;
//     let itemIndex;
//     db.map((todo, index) => {
//         if (todo.id === id) {
//             todoFound = todo;
//             itemIndex = index;
//         }
//     });

//     if (!todoFound) {
//         return res.status(404).send({
//             success: 'false',
//             message: 'todo not found',
//         });
//     }

//     if (!req.body.title) {
//         return res.status(400).send({
//             success: 'false',
//             message: 'title is required',
//         });
//     } else if (!req.body.description) {
//         return res.status(400).send({
//             success: 'false',
//             message: 'description is required',
//         });
//     }

//     const updatedTodo = {
//         id: todoFound.id,
//         title: req.body.title || todoFound.title,
//         description: req.body.description || todoFound.description,
//     };

//     db.splice(itemIndex, 1, updatedTodo);

//     return res.status(201).send({
//         success: 'true',
//         message: 'todo added successfully',
//         updatedTodo,
//     });
// });


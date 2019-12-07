import express from 'express';
import apiController from '../controller/apiController.js';


const router = express.Router();
//routes directed to controller
//  json routes
router.get('/api/v1/json', apiController.getAllJson);
//xml routes
router.get('/api/v1/xml', apiController.getAllXML);
// todo routes
router.get('/api/v1/todos', apiController.getAllTodos);
router.get('/api/v1/todos/:id', apiController.getTodo);
router.post('/api/v1/todos', apiController.createTodo);
router.put('/api/v1/todos/:id', apiController.updateTodo);
router.delete('/api/v1/todos/:id', apiController.deleteTodo);

export default router;


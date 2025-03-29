const { successPrototype, errorPrototype } = require('../utils/apiResponse');
const TodoService = require('../services/todoService');

class TodoController {
    static async createTodo(req, res) {
        try {
            const { title } = req.body;
            const todo = await TodoService.createTodo(title);
            const response = successPrototype.clone();
            response.data = todo;
            res.json(response);
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static async getTodos(req, res) {
        try {
            const todos = await TodoService.getTodos();
            const response = successPrototype.clone();
            response.data = todos;
            res.json(response);
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static async updateTodo(req, res) {
        try {
            const { id } = req.params;
            const { completed } = req.body;
            const todo = await TodoService.updateTodo(id, completed);
            const response = successPrototype.clone();
            response.data = todo;
            res.json(response);
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            await TodoService.deleteTodo(id);
            const response = successPrototype.clone();
            response.message = "Todo deleted successfully";
            res.json(response);
        } catch (error) {
            TodoController.handleError(res, error);
        }
    }

    static handleError(res, error) {
        const response = errorPrototype.clone();
        response.details = error.message;
        res.status(response.status).json(response);
    }
}

module.exports = TodoController;

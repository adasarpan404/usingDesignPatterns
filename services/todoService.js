const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class TodoService {
    static async createTodo(title) {
        return prisma.todo.create({ data: { title, completed: false } });
    }

    static async getTodos() {
        return prisma.todo.findMany();
    }

    static async updateTodo(id, completed) {
        return prisma.todo.update({ where: { id: Number(id) }, data: { completed } });
    }

    static async deleteTodo(id) {
        return prisma.todo.delete({ where: { id: Number(id) } });
    }
}

module.exports = TodoService;


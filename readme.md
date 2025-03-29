# Todo List API

## What I Have Done
This project is a **Todo List API** built using **Node.js, Express, Prisma, and SQLite**. It follows the **Prototype Creational Pattern** and adheres to **clean code principles** to improve maintainability and readability.

### Features Implemented:
- **CRUD operations for Todos** (Create, Read, Update, Delete)
- **SQLite database with Prisma ORM**
- **Express.js for RESTful API**
- **Prototype Creational Pattern** for consistent API responses
- **Modular architecture** (Routes, Controllers, Services, and Utilities separated)

## What I Have Learned
While building this project, I have gained knowledge in:
- Implementing the **Prototype Creational Pattern** in a real-world application
- Structuring a **Node.js project** using clean architecture principles
- Using **Prisma ORM** for database management with SQLite
- Writing **RESTful APIs** with Express.js
- Implementing **error handling and response standardization**
- Using **modular code structure** to separate concerns

## Clean Code Techniques Used
### 1. **Separation of Concerns**
   - Divided the project into **Controllers, Services, Routes, and Utilities**
   - Kept each file focused on a **single responsibility**

### 2. **Single Responsibility Principle (SRP)**
   - **Controllers** handle HTTP requests and responses
   - **Services** manage business logic and database operations
   - **Routes** handle API endpoint definitions
   - **Utility files** for reusable logic (e.g., standardized API responses)

### 3. **Prototype Creational Pattern**
   - Used a **base API response prototype** to ensure consistency in API responses
   - Implemented a `clone()` method to create copies instead of redefining objects

### 4. **Error Handling**
   - Created a centralized `handleError` function to manage API errors consistently
   - Used **try-catch** blocks in all async functions

### 5. **Modular Code Structure**
   - Divided the project into separate files and folders
   - Made the code **easier to maintain, test, and scale**



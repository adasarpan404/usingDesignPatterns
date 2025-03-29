const express = require("express");
const app = express();
const port = 3000;
const todoRoutes = require("./routes/todoRoutes");
const { errorPrototype } = require("./utils/apiResponse");
app.use(express.json());
app.use("/todos", todoRoutes);

app.use((err, req, res, next) => {
    const response = errorPrototype.clone();
    response.message = err.message;
    res.status(response.status).json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

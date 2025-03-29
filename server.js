const express = require("express");
const app = express();
const port = 3000;
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use("/todos", todoRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

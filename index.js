const express = require("express");

const app = express();
var usersRouter = require('./routes/users');
app.get("/", (req, res) => {
	res.send("Express on Vercel");
})

app.get("/test", (req, res) => {
	res.send("Express on Vercel");
})

app.use('/users', usersRouter);

app.listen(5000, () => {
	console.log("Running on port 5000.");
})

// Export the Express API
module.exports = app;

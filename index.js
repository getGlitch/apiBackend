const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 3050;

const apiData = require("./data.json");
app.get("/", (req, res) => {
	res.send("Live..");
});
app.get("/api", (req, res) => {
	res.send(apiData);
});
// app.get("/api/:id", (req, res) => {

// 	// res.send(if(req.params.id===apiData[]));
// });

app.listen(port, () => {
	console.log("Server is running..");
});

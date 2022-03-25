const express = require("express");
const path = require("path");
const bp = require('body-parser')
const cors = require("cors")
const {corsOptions}=require("./config/cors")

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
configureApp = () => {
	app.use(cors(corsOptions));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }))
}
const app = express();
const port = process.env.PORT || "8001";
app.get("/", (req, res) => {
	res.status(200).send("WHATABYTE: Food For Devs");
});
app.listen(port,()=>{
	console.log('No running server')
})


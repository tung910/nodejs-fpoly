import express from "express";
import { default as productList } from "./routes/products";

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use("/api", productList);

app.get("/", (req, res) => {
	res.send("<h1>HOME PAGE</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log("Running port " + PORT);
});

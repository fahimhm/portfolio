const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({
	path: path.resolve(__dirname, '.env')
});
const cors = require('cors');

const Txn = require('./models/Txn');

const app = express();

app.use(cors({
	origin: "*", // "https://fahimworks.online",
}));
app.use(express.json());

app.get("/txn", async (req, res) => {
	const txn = await Txn.find();
	res.json(txn);
});

app.delete("/txn/:txnId", async (req, res) => {
	const txnId = req.params.txnId;
	const txn = await Txn.findByIdAndDelete(txnId);
	res.json(txn);
})

app.post("/txn", async (req, res) => {
	const newTxn = new Txn({
		wallet: req.body.wallet,
		expense: req.body.expense,
		amount: req.body.amount,
		date: req.body.date,
	});
	const createdTxn = await newTxn.save();
	res.json(createdTxn);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
	app.listen(3001, () => {
		console.log('Example app listening')
	});
})
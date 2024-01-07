const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Txn = require('./models/Txn');

const app = express();

app.use(express.json());

app.post("/txn", async (req, res) => {
	const newTxn = new Txn({
		title: req.body.title,
		wallet: req.body.wallet,
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


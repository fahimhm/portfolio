const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({
	path: path.resolve(__dirname, '.env')
});
const cors = require('cors');

// const Txn = require('./models/Txn').default;
const User = require('./models/Users');

const app = express();

app.use('/', require('../routes/authRoutes.js'));
app.use(express.json());

const port = 8000;

// app.post('/register_page', async (req, res) => {
// 	try {
// 		const newUser = new User({
// 			username: req.body.username,
// 			email: req.body.email,
// 			password: req.body.password,
// 		});
// 		const createdUser = await newUser.save();
// 		res.json(createdUser);
// 	} catch (error) {
// 		res.status(500).json({message: error.message});
// 	}
// });

mongoose.connect(process.env.MONGO_URL)
	.then(() => {
		app.listen(port, () => {
			console.log(`Connect to mongoDB and listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.log('Error connecting to mongoDB:', error.message);
	});


// app.get("/finance_tracker", async (req, res) => {
// 	const txn = await Txn.find();
// 	res.json(txn);
// });

// app.delete("/txn/:txnId", async (req, res) => {
// 	const txnId = req.params.txnId;
// 	const txn = await Txn.findByIdAndDelete(txnId);
// 	res.json(txn);
// })

// app.post("/finance_tracker", async (req, res) => {
// 	const newTxn = new Txn({
// 		wallet: req.body.wallet,
// 		expense: req.body.expense,
// 		amount: req.body.amount,
// 		date: req.body.date,
// 	});
// 	const createdTxn = await newTxn.save();
// 	res.json(createdTxn);
// });

// app.get("/txn/:txnId", async (req, res) => {
// 	const txnId = req.params.txnId;
// 	const txn = await Txn.findById(txnId);
// 	if (!txn) {
// 		res.status(404).json({message: "Transaction not found"});
// 	} else {
// 		res.json(txn);
// 	}
// });
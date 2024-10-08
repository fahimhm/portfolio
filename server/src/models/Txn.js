const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const TxnSchema = new Schema({
	// txnid: ObjectId,
	wallet: String,
	expense: String,
	amount: String,
	date: Date,
});

const TxnModel = mongoose.model('Txn', TxnSchema);

module.exports = TxnModel;
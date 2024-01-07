const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const TxnSchema = new Schema({
	// txnid: ObjectId,
	title: String,
	wallet: String,
	amount: String,
	date: Date,
});

const TxnModel = mongoose.model('Txn', TxnSchema);

module.exports = TxnModel;
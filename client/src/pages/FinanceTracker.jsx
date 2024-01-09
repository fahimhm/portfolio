import { useState, useEffect } from "react";
import { Layout } from "../layouts";

const FormFinanceTracker = () => {
  const inputClass =
    "block w-72 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mt-2 mb-4";
  const labelClass = "block text-slate-300 font-semibold text-sm capitalize";

  const [wallet, setWallet] = useState();
  const [expense, setExpense] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

	const [txn, setTxn] = useState([]);

  /**
   * @param {React.FormEvent} e
   */
  async function handleCreateLog(e) {
    e.preventDefault();
    await fetch("http://localhost:3001/txn", {
      method: "POST",
      body: JSON.stringify({
        wallet,
        expense,
        amount,
        date,
      }),
			headers: {
				"Content-Type": "application/json",
			}
    });
		setWallet("");
		setExpense("");
		setAmount("");
		setDate("");
  }

	useEffect(() => {
		async function fetchTxn() {
			const response = await fetch("http://localhost:3001/txn");
			const newTxn = await response.json();
			setTxn(newTxn);
		}
		fetchTxn();
	}, []);

  return (
		<>
			<form onSubmit={handleCreateLog}>
				<label htmlFor="wallet" className={labelClass}>
					wallet
				</label>
				<input
					type="text"
					id="wallet"
					value={wallet}
					/**
					 * @param {React.ChangeEvent<HTMLInputElement>}
					 */
					onChange={(e) => {
						setWallet(e.target.value);
					}}
					placeholder="Type your wallet..."
					className={inputClass}
				/>

				<label htmlFor="expense" className={labelClass}>
					expense
				</label>
				<input
					type="text"
					id="expense"
					value={expense}
					/**
					 * @param {React.ChangeEvent<HTMLInputElement>}
					 */
					onChange={(e) => {
						setExpense(e.target.value);
					}}
					placeholder="Type your expense..."
					className={inputClass}
				/>

				<label htmlFor="amount" className={labelClass}>
					amount
				</label>
				<input
					type="text"
					id="amount"
					value={amount}
					/**
					 * @param {React.ChangeEvent<HTMLInputElement>}
					 */
					onChange={(e) => {
						setAmount(e.target.value);
					}}
					placeholder="How much your expense???"
					className={inputClass}
				/>

				<label htmlFor="date" className={labelClass}>
					date
				</label>
				<input
					type="text"
					id="date"
					value={date}
					/**
					 * @param {React.ChangeEvent<HTMLInputElement>}
					 */
					onChange={(e) => {
						setDate(e.target.value);
					}}
					placeholder="When?"
					className={inputClass}
				/>

				<button className="mt-8 w-[150px] bg-sky-950 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-zinc-400 tracking-wider">
					Submit
				</button>
			</form>

			<ul>
				{txn.map((_txn) => (
					<li key={_txn._id}>{_txn.wallet}</li>
				))}
			</ul>
		</>
  );
};

const FinanceTracker = () => {
  const titleName = "Dumy Project #2";
  const shortDesc = "Personal Finance Tracker - Basic CRUD";
  const longDesc =
    "Personal Finance Tracker a project meticulously crafted as part of a web development portfolio.";
  const para01 =
    "At its core, the Personal Finance Tracker is designed to empower users with a seamless and intuitive platform to manage their finances effectively. This comprehensive application showcases the fundamental principles of CRUD (Create, Read, Update, Delete) operations, utilizing a powerful stack of technologies: MongoDB for database management, Express JS for server-side scripting, React JS for dynamic user interfaces, and Node JS to tie them all together.";
  const para02 = "";

  return (
    <Layout
      titleName={titleName}
      shortDesc={shortDesc}
      longDesc={longDesc}
      para01={para01}
      para02={para02}
      customComponent={FormFinanceTracker}
    />
  );
};

export default FinanceTracker;


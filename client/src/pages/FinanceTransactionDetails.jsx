import { useState, useEffect } from "react";
// import { Layout } from "../layouts";
import { API_URL } from "../api/config";
import { formatDate } from "../components";
import { useNavigate, useParams } from "react-router-dom";

const FinanceTransactionDetails = () => {
  const { id } = useParams();
  const [txn, setTxn] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(`${API_URL}/txn/${id}`);
        const data = await response.json();
        setTxn(data);
      } catch (error) {
        console.error("Error fetching transaction details:", error);
      }
    };
    fetchTransaction();
  }, [id]);

  return (
    <div>
      <h2>Transaction Details</h2>
      <p>Date: {formatDate(txn.date)}</p>
      <p>Wallet: {txn.wallet}</p>
      <p>Expense: {txn.expense}</p>
      <p>Amount: {txn.amount}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}



export default FinanceTransactionDetails;


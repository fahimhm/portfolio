import React from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api/config";
import { formatDate } from "../components";

const FinanceTransactionDetails = () => {
  const { txnId } = useParams();

  const [txn, setTxn] = React.useState(null);

  React.useEffect(() => {
    async function fetchTransaction() {
      const response = await fetch(`${API_URL}/txn/${txnId}`);
      const data = await response.json();
      setTxn(data);
    }
    fetchTransaction();
  }, [txnId]);

  return (
    <div>
      {txn && (
        <>
          <h2>Transaction Details</h2>
          <ul>
            <li>Date: {formatDate(txn.date)}</li>
            <li>Wallet: {txn.wallet}</li>
            <li>Expense: {txn.expense}</li>
            <li>Amount: {txn.amount}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default FinanceTransactionDetails;
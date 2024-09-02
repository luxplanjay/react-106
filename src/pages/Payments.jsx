import { useEffect, useState } from "react";
import PaymentList from "../components/PaymentList/PaymentList";
import { getPayments } from "../payments-api";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await getPayments();
      setPayments(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Payments page</h1>
      {payments.length > 0 && <PaymentList payments={payments} />}
    </div>
  );
}

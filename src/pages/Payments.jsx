import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaymentList from "../components/PaymentList/PaymentList";
import { getPayments } from "../payments-api";
import OwnerSearchForm from "../components/OwnerSearchForm";

export default function Payments() {
  // const location = useLocation();
  // console.log("Payments", location);

  const [payments, setPayments] = useState([]);

  const [params] = useSearchParams();
  const owner = params.get("owner") ?? "";

  useEffect(() => {
    async function fetchData() {
      const data = await getPayments(owner);
      setPayments(data);
    }

    fetchData();
  }, [owner]);

  return (
    <div>
      <h1>Payments page</h1>
      <OwnerSearchForm />
      {payments.length > 0 && <PaymentList payments={payments} />}
    </div>
  );
}

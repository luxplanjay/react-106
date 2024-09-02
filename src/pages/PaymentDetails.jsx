import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import PaymentInfo from "../components/PaymentInfo";
import { getPaymentById } from "../payments-api";

export default function PaymentDetails() {
  const { paymentId } = useParams();

  const [payment, setPayment] = useState(null);
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await getPaymentById(paymentId);
      setPayment(data);
    }

    fetchData();
  }, [paymentId]);

  return (
    <div>
      <h1>PaymentDetails</h1>
      {payment && <PaymentInfo payment={payment} />}

      <ul>
        <li>
          <NavLink to="bank">Bank</NavLink>
        </li>
        <li>
          <NavLink to="receipt">Receipt</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

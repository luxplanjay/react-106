import { Suspense, useEffect, useRef, useState } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import PaymentInfo from "../components/PaymentInfo";
import { getPaymentById } from "../payments-api";

export default function PaymentDetails() {
  const { paymentId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/payments");
  // console.log("PaymentDetails", backLinkRef);

  const [payment, setPayment] = useState(null);

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

      <Link to={backLinkRef.current}>Back to payments</Link>

      {payment && <PaymentInfo payment={payment} />}

      <ul>
        <li>
          <NavLink to="bank">Bank</NavLink>
        </li>
        <li>
          <NavLink to="receipt">Receipt</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>LOADING SUBPAGE!!!</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

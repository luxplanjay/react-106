import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Payments from "../../pages/Payments";
import PaymentDetails from "../../pages/PaymentDetails";
import NotFound from "../../pages/NotFound";
import Navigation from "../Navigation/Navigation";
import BankInfo from "../BankInfo";
import PaymentReceipt from "../PaymentReceipt";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/:paymentId" element={<PaymentDetails />}>
          <Route path="bank" element={<BankInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";

const Home = lazy(() => import("../../pages/Home"));
const Payments = lazy(() => import("../../pages/Payments"));
const PaymentDetails = lazy(() => import("../../pages/PaymentDetails"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const BankInfo = lazy(() => import("../BankInfo"));
const PaymentReceipt = lazy(() => import("../PaymentReceipt"));

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/:paymentId" element={<PaymentDetails />}>
            <Route path="bank" element={<BankInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

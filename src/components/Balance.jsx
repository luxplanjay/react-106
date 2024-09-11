import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, selectBalance } from "../redux/balanceSlice";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const handleDeposit = () => {
    dispatch(deposit(100));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(50));
  };

  return (
    <div>
      <p>Balance: {balance} credits</p>
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/store";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);

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

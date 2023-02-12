import { useSelector } from "react-redux";
import style from "./ReduxOutput.module.css";
const ReduxOutput = () => {
  const withdrawMoreAndLess = useSelector((state) => state.withdraw);

  return (
    <div className={style.reduxoutput}>
      <h2>${withdrawMoreAndLess}</h2>
      <h5>Total Amount</h5>
    </div>
  );
};

export default ReduxOutput;

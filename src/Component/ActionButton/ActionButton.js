import { useDispatch, useSelector } from "react-redux";
import { actionTaker } from "../../store/withdrawStore";
import style from "./ActionButton.module.css";

const ActionButton = () => {
  const dispatch = useDispatch();
  const withdrawMoreAndLess = useSelector((store) => store.withdraw);
  const isValid1 = useSelector((store) => store.isValid1);
  const isValid2 = useSelector((store) => store.isValid2);
  //   const withdrawLess = useSelector((state) => state.withdrawLess);

  const withdrawMoreHandler = (event) => {
    event.preventDefault();
    dispatch(actionTaker.withdrawOne(10000));
  };
  const withdrawLessHandler = (event) => {
    event.preventDefault();
    dispatch(actionTaker.withdrawTwo(5000));
  };
  return (
    <div className={style.action_button}>
      <div>
        {!isValid1 && (
          <button onClick={withdrawMoreHandler}>Withdraw $10,000</button>
        )}
      </div>
      <div>
        {!isValid2 && (
          <button
            className={isValid1 ? style.button_change : ""}
            onClick={withdrawLessHandler}
          >
            Withdraw $5,000
          </button>
        )}
      </div>
      {isValid2 && (
        <footer>
          <h2>Exceed minimum withdrawal</h2>
        </footer>
      )}
    </div>
  );
};

export default ActionButton;

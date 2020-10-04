import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );
  //   const number = useSelector((state) => state.counter.number);
  //   const diff = useSelector((state) => state.counter.diff);

  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onSetDiff = useCallback((diff) => dispatch(setDiff(diff)), [dispatch]);

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

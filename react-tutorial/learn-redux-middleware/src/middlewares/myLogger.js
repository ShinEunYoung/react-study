const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log("\tPrev: ", store.getState()); //action 수행후 바뀐 상태 값
  const result = next(action);
  console.log("\tNext: ", store.getState()); //action 수행후 바뀐 상태 값
  return result;
};

export default myLogger;

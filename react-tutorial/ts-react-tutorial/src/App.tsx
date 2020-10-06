import React from "react";
import Counter from "./Counter";
import Greetings from "./Greetings";
import MyForm from "./MyForm";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };
  //return <Greetings name="리액트" onClick={onClick} />;

  return <Counter />;

  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;
}

export default App;

import React from "react";
import ReducerSample from "./ReducerSample";
import ReducerContextSample from "./ReducerContextSample";
import { SampleProvider } from "./SampleContext";
//import Counter from "./Counter";
//import Greetings from "./Greetings";
//import MyForm from "./MyForm";

function App() {
  // const onClick = (name: string) => {
  //   console.log(name);
  // };
  //return <Greetings name="리액트" onClick={onClick} />;

  //return <Counter />;

  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;

  return (
    <SampleProvider>
      <ReducerContextSample />
    </SampleProvider>
  );
}

export default App;

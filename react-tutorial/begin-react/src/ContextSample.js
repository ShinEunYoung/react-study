import React, { createContext, useContext, useState } from 'react';

const MyConetxt = createContext('defaultValue');

function Child() {
  const text = useContext(MyConetxt);

  return <div>안녕하세요? {text}</div>;
}

function Parent({ text }) {
  return <Child />;
}

function GrandParent({ text }) {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    <MyConetxt.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME!</button>
    </MyConetxt.Provider>
  );
}

export default ContextSample;

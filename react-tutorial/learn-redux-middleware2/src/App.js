import React from "react";
//import CounterContainer from "./containers/CounterContainer";
//import PostListContainer from "./containers/PostListContainer";
import { Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import CounterContainer from "./containers/CounterContainer";
function App() {
  //return <CounterContainer />;
  //return <PostListContainer />;
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;

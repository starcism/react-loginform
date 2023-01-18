import { Fragment } from "react";
import GlobalStyles from "./GlobalStyles";
import LoginForm from "./pages/LoginForm";
import Router from "./Router";

function App() {
  return (
    <Fragment>
      <LoginForm />
      <Router />
      <GlobalStyles />
    </Fragment>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 8000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Router>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;

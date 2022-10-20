import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Create from "./pages/Create/Create";
import NotFound from "./pages/NotFound/NotFound";
import Preview from "./pages/Preview/Preview";
import Splash from "./pages/Splash/Splash";
import { StoreProvider } from "./store";

import "./App.css";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="app" data-testid="App">
          <Switch>
            <Route exact path="/">
              <Splash />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/preview">
              <Preview />
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;

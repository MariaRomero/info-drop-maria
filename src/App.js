import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Splash from "./pages/Splash/Splash";
import "./App.css";
import Create from "./pages/Create/Create";
import Preview from "./pages/Preview/Preview";

function App() {
  return (
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
  );
}

export default App;

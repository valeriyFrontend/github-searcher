import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearchUsers from "./components/SearchUsers/SearchUsers";
import UserPage from "./components/UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchUsers />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

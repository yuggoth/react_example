import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainLayout from "./components/mainLayout"
import Tab1 from "./components/tab1"
import Tab2 from "./components/tab2"
import Tab3 from "./components/tab3"
import Tab4 from "./components/tab4"
import Grid from "@material-ui/core/Grid"

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <MainLayout />
          </Grid>
          <Grid item xs={9}>
            <Switch>
              <Route exact path="/tab-1" component={Tab1} />
              <Route path="/tab-2" component={Tab2} />
              <Route path="/tab-3" component={Tab3} />
              <Route path="/tab-4" component={Tab4} />
              <Route exact path="/" component={Tab1} />
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;

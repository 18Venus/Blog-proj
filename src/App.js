import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './navbar.js';
import Home from './home.js';
import Create from './create.js';
import BlogDetails from './blogdetails.js';
import NotFound from './notfound.js';
import Edit from './edit.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

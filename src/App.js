import Navbar from './navbar.js';
import Home from './home.js';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Create from './create.js';
import BlogDetails from './blogdetails.js';
import NotFound from './notfound.js';
import Categories from './categories.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
       <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/categories">
          <Categories/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
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

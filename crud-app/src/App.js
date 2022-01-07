import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NotFound from './Components/NotFound';
import EditUsers from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/all" component={AllUsers}></Route>
        <Route exact path="/add" component={AddUsers}></Route>
        <Route exact path ="/edit/:id" component = {EditUsers}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

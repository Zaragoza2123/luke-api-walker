import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import StarWarAPISearch from './components/StarWarAPISearch';
import SearchForm from './components/SearchFrom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <SearchForm></SearchForm>
      <Switch> 
      <Route exact path='/:catagory/:id'>
        <StarWarAPISearch></StarWarAPISearch>
      </Route>
      </Switch>
      </BrowserRouter>
      
    </div>

  );
}

export default App;

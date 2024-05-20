import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import { routes } from './routes';

const App = () => {
  return (
    <Router>
      <SearchBar />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CityTable from './src/CityTable';
import WeatherPage from './src/WeatherPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CityTable} />
        <Route path="/weather/:cityId" src={WeatherPage} />
      </Switch>
    </Router>
  );
};

export default App;
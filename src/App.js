
import {Switch, Route , BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
    <Route component={Home} />
    </Switch>
    </Router>
  );
}

export default App;

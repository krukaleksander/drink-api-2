import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCoctail from './pages/SingleCocktail';
import Error from './pages/Error';

import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/coctail/:id'>
                    <SingleCoctail />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>

    )
}

export default App;

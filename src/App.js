import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from 'tss-react/mui';
import Alert from './components/Alert';

function App() {

  const useStyles = makeStyles()(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    }
  }))

  const {classes} = useStyles()

  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
      </div>
      <Alert />
    </Router>
  );
}

export default App;

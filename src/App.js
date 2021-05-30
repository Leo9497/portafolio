import logo from './logo.svg';
import './App.css';
import { Grid, makeStyles, Box, withWidth, Divider } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portafolio from './components/Portafolio';
import Contactame from './components/Contactame'
import Header from "./components/Header";
import NavBar from "./components/NavBar";


const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <>
    <Router>
      <NavBar />
      

      <div >
      
      </div>
    </Router>
  </>
  );
}

export default App;

        
        
             
            
       
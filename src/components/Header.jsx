import React, { useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, useHistory } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Home from "./Home";
import About from "./About";
import Contactame from "./Contactame";
import Portafolio from "./Portafolio";



  

   
function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
 
  window: PropTypes.func,
};



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1,
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  }
}));

const Header = props => {
  const history = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const about = useRef(null);
  const inicio = useRef(null);
  const portafolio = useRef(null);
  const contact = useRef(null);
 


  const gotoAbout = () =>
      window.scrollTo({
          top: about.current.offsetTop,
          behavior: "smooth"
      });

      const gotoInicio = () =>
      window.scrollTo({
          top: inicio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoPortafolio = () =>
      window.scrollTo({
          top: portafolio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoContact = () =>
      window.scrollTo({
          top: contact.current.offsetTop,
          behavior: "smooth"
      });

 
      const handleMenu = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClick = pageURL => {
       history.push(pageURL);
        setAnchorEl(null);
      };
    
      const handleButtonClick = pageURL => {
        this.props.history.push(pageURL);
      };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Acerca",
      pageURL: "/about"
    },
    {
    menuTitle: "Portafolio",
    pageURL: "/portafolio",
  },
    {
      menuTitle: "Contacto",
      pageURL: "/contact"
    },
    
  ];

  return (
    <div>
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Leobardo Antunez Cayetano
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                variant='contained' color="primary"
                onClick={gotoInicio}
              >
                Inicio
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/about")}
              >
                ABOUT
              </Button>
              <Button
                variant='contained' color="primary"
                onClick={gotoPortafolio}
              >
                Portafolio
              </Button>
              <Button
                variant='contained' color="primary"
                onClick={gotoContact}
              >
                contacto
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Toolbar />
      
      </React.Fragment>
      <div>
                    <div ref={inicio}>
                        <Home />
                    </div>
       <div ref={about}>
           <About />
       </div>
                <div ref={portafolio}>
                    <Portafolio />
                </div>
            
                <div ref={contact}>
                    <Contactame />
                </div>
                </div>

       </div>
  );
};

export default withRouter(Header);
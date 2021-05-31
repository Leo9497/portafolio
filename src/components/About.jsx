import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Typography, Box} from '@material-ui/core';
import Competencias from './Competencias'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    
    
  },
  papericons: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 500,
  },
}));

function About() {
    const classes = useStyles();
    return (
    <div className="App ">
        <header className="App-header  ">
        <Grid container   >
        
        <Grid item xs={12} sm={6} >
        
          <Paper className={classes.paper} variant="outlined"  >
              <Typography>
          <Typography variant='h4'  >
           <Box className="color" fontWeight="fontWeightBold"   m={4} letterSpacing={2}   >
           Sobre mí
          </Box></Typography>
          <Box  p={3} letterSpacing={1}   >
          <p  className="color" align="justify" style={{fontSize: 22}}>Soy Ingeniero en Telemática (informática con telecomunicaciones),
            me enfoco al desarrolllo de software, tanto para apps moviles, desarrollo web y 
            programación de  microcontroladores, fronted y backend, soy capaz de adaptarme a cualquier circunstancia y dar 
            siempre lo mejor de mí en cualquier proyecto.</p>
        
            </Box>
            </Typography>
          </Paper>
        </Grid>


        <Grid item xs={12} sm={6}>
        <Paper className={classes.papericons}  align-items="center" >
        <Typography variant='h4' >
           <Box className="color" fontWeight="fontWeightBold"  m={4} letterSpacing={2} align-items="left"  >
          Competencias
          </Box></Typography>
      
          <Competencias/>
          
          
          </Paper>
        </Grid>
        
      </Grid>
        </header>
    </div>
    )
}

export default About;

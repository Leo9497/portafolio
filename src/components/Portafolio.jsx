import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Typography, Box} from '@material-ui/core';
import Arduino from './portaimages/Arduino'
import AppMixe from './portaimages/AppMixe'
import Pagina from './portaimages/Pagina'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
}));

function Portafolio() {
  const classes = useStyles();

  return (
    
      <header className="App-header  ">
      <Grid container >
      <Grid item xs={12}>
          <Paper className={classes.paper}><Typography component="div" >
        
          <Typography variant='h3' >
           <Box className="color" fontWeight="fontWeightBold" letterSpacing={3}   p={3}>
            Portafolio
      </Box>  </Typography> 
      <Typography className="color" variant='h5' fontWeight="fontWeightBold"  >
           
            Proyectos realizados
        </Typography>
          
          </Typography></Paper>
        </Grid>
       
        
        <Grid item xs>
          <Paper className={classes.paper}><AppMixe/>
          </Paper>
          
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Arduino/></Paper>
        </Grid>
        
        <Grid item xs>
          <Paper className={classes.paper}><Pagina/></Paper>
        </Grid>
      
      
        
      </Grid>
      </header>
    
  );
}

export default Portafolio;
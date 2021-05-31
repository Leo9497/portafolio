import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
  },
  media: {
    height: 280,
  },
});

export default function Cards() {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/carrito.png"
          title="Arduino"
        />
        <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
            Programación Arduino
          </Typography>
          <Typography className="color"  variant="body2" component="p" align="justify" style={{fontSize: 16}}>
            Proyecto de practica de
            Programación de microcontrolador arduino carro robot que funciona por vía bluetoth
            y la aplicación desarrollada para un dispositivo android.
            Aparte como otros proyectos como semaforro inteligente y una incubadora.
          </Typography>
        </CardContent>
      </CardActionArea>
   
    
     

    </Card>
  );
}

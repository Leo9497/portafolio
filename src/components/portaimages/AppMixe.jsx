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
    maxWidth: 330,
  },
  media: {
    height: 280,
  },
});

export default function AppMixe() {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/traductor.jpg"
          title="App Mixe"
        />
        <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
            App ëyuujk
          </Typography>
          <Typography className="color" variant="body2"  component="p" align="justify" style={{fontSize: 16}}>
            Esta es una App didáctica para aprender la lengua índigena Mixe variante de la comunidad 
            de Tamazulapam Del Espiritu Santo Mize Oax. Que cuenta con audios 
            y un traductor de Español a Mixe viceversa.
            Se esta trabajando la segunda versión.
            
          </Typography>
        </CardContent>
      </CardActionArea>
   

   
     

    </Card>
  );
}

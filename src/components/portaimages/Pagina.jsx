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
    maxWidth:345,
  },
  media: {
    height: 280,
  },
});

export default function Pagina() {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/pagina.png"
          title="Mixe"
        />
        <CardContent>
          <Typography  className="color" gutterBottom variant="h5" component="h2">
            Aprende la lengua Mixe
          </Typography>
          <Typography style={{fontSize: 16}} className="color" variant="body2"   align="justify">
            Este es un proyecto personal que esta en proceso, aprovechando la tecnología como una 
            herramienta para la fomentación de la lengua indigena Mixe teniendo como objetivo compartir diferentes 
            materiales digitales.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    
     

    </Card>
  );
}

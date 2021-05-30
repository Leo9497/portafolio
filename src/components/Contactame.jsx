import emailjs from "emailjs-com";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Typography, } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import {Icon} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


export default function ContactUs() {


    function Enviarmensaje(e) {
      e.preventDefault();

      emailjs.sendForm('gmailMessage', 'template_39pj6bp',
       e.target, 'user_zoZLqnm8rPZhZyRDaMUbZ')
        .then((result) => {
            alert('Mensaje enviado con exito')
        }, (error) => {
          alert('Error al enviar, intentalo más tardes')
        });
        e.target.reset();

 
    }
    return(
        <div className="App">
        <header className="App-header">
        <Typography  className="color" gutterBottom variant="h3" >
            Contacto
          </Typography>
            <form onSubmit={Enviarmensaje}>
                    <div >
                        
                    <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto"   >
                              <label>Nombre</label>
                              <input type="text"   className="form-control" size="40" required placeholder="Nombre y apellido " name="name"/>
                          </div>
                          <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto"   >
                              <label>Email</label>
                              <input type="text"   className="form-control" size="40" required placeholder="Nombre " name="name"/>
                          </div>
            

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Mensaje</label>
                            <textarea className="form-control" id="" cols="30" rows="5" required placeholder="Escribe un mensaje" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar mensaje"></input>
                        </div>

                    </div>
                </form>
                </header>
                <Typography className="color"  gutterBottom variant="h5" component="h2">
            <box>
            Leobardo Antunez Cayetano</box>
          </Typography>
                <Typography className="color"  gutterBottom variant="h5" component="h2">
            <Icon >
            <WhatsAppIcon />
            </Icon>
            <box>
            Tel: 951-168-18-60</box>
          </Typography>
               
            <Typography className="color"  gutterBottom variant="h5" component="h2">
            <Icon >
            <EmailIcon />
            </Icon>
            <box>
            leo_mixe@hotmail.com</box>
          </Typography>
          </div>

    )
}
import React, { useRef } from "react"
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_zzdfgfa', 
        'template_0e5ornw', 
        form.current, {
          publicKey: 'IE-QEou6yflz1NT-G',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset()
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
  return (
   <>
   <Card style={{ padding: '1rem', margin: "1rem"}}>
        <Card.Title>Contact</Card.Title>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Nom Prénom + Nom de société</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Entrez votre Nom et prénom ou le nom de votre société" required autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Mail">
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control type="mail" name="user_mail" placeholder="Entrez votre adresse mail" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Votre message</Form.Label>
                    <Form.Control type="text" name="message" placeholder="Entrez votre message" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
        </Form>
    </Card>
   </>
  );
}

export default Contact

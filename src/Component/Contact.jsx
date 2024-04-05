import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
   <>
   <Card style={{ padding: '1rem', margin: "1rem"}}>
        <Card.Title>Contact</Card.Title>
            <Form>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Nom Prénom + Nom de société</Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre Nom et prénom ou le nom de votre société" required autofocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Mail">
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control type="mail" placeholder="Entrez votre adresse mail" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Votre message</Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre message" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    </Card>
   </>
  );
}

export default Contact

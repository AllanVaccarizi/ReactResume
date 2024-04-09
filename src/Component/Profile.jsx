import { CardBody, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Pp from "../images/pp.png"
import M2I from "../images/m2i.png"
import SkillsBar from './SkillsBar'; //import Skillsbar.jsx
import AOS from "aos" //dependecy to animate the cards
import 'aos/dist/aos.css' //dependecy to animate the cards

function Profile() {

    AOS.init() //initialize the aos dependency

  return (
    <>

    <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

        <Card.Title>Bienvenue sur mon site !</Card.Title>
        
        <Card.Body>
        Ici, vous découvrirez toutes les informations me concernant, qu'il s'agisse de mes réseaux sociaux ou de mes réalisations. 
        </Card.Body>

    </Card>

    <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-left" data-aos-duration="1000">
        
        <Container>
            <Row>
                <Col>

                    <Card.Title>Qui suis-je ?</Card.Title>

                    <Card.Body>
                    Je m'appelle Allan Vaccarizi, j'ai 24 ans, et je suis en reconversion professionnelle. 
                    <br />
                    <br />
                    Issu du milieu de la restauration, j'ai décidé de me tourner vers le développement web, un domaine qui m'attire par ses multiples possibilités. 
                    Actuellement, je suis un cursus préparatoire nommé Pépi-dev à l'école M2I, afin d'acquérir les compétences nécessaires pour décrocher une alternance en développement web et mobile.
                    <br />
                    <br />
                    Mon objectif est de obtenir un diplôme dans ce domaine. Mon contrat en alternance débutera entre juillet et octobre.
                    </Card.Body>

                </Col>

                <Col>

                    <CardBody style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Image src={Pp} rounded />
                    </CardBody>

                </Col>    
            </Row>            
        </Container>
    </ Card>

    <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">
    
        <Container>
            <Row>
                <Col>

                    <Card.Title>Mon projet</Card.Title>

                    <CardBody style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Image src={M2I} rounded/>
                    </CardBody>

                </Col>

                <Col>

                    <Card.Body>
                    Actuellement inscrit à la M2I Academy, je suis immergé dans un cursus qui explore une gamme complète d'outils de développement, notamment HTML, CSS, Javascript, Wordpress et PHP, fournissant ainsi les bases nécessaires pour devenir un développeur compétent.
                    <br />
                    <br />
                    En parallèle, je m'engage dans des projets concrets pour appliquer mes compétences acquises. L'un de ces projets implique une collaboration avec un client, où nous avons élaboré un cahier des charges pour créer un site web dédié à son jeu vidéo en développement. À travers des rendez-vous bi-mensuels, nous suivons l'évolution du site, témoignant ainsi de mon engagement envers la satisfaction du client.
                    <br />
                    <br />
                    Désormais, je m'oriente vers une spécialisation, et vous naviguez actuellement sur mon premier site créé avec React, témoignant de ma volonté de rester à la pointe des technologies émergentes.    
                    <br />
                    <br />
                    L'opportunité de l'alternance constitue un tremplin pour l'expansion de mes compétences. Dans le cadre de ce programme, voici les domaines que j'explorerai avec mon école :
                    <br />
                    • Maîtrise des langages JavaScript, React, Vue.js et Node.js
                    <br />
                    • Développement avec PHP et gestion des bases de données (SQL et MongoDB)
                    <br />
                    • Conception UX
                    <br />
                    • Utilisation avancée des CMS tels que Wordpress et Prestashop
                    </Card.Body>

                </Col>
            </Row>
        </Container>
    </Card>

    <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-left" data-aos-duration="1000">

        <CardBody>
            <SkillsBar /> {/*SkillsBar.jsx*/}
        </CardBody>

    </Card>

    <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

        <Card.Title>Mes passions</Card.Title>

        <Card.Body>

            <ListGroup>

                <ListGroup.Item style={{ fontWeight: "bold"}}>L'informatique</ListGroup.Item>
                    <Card.Body> Je consacre beaucoup de temps à être sur mon ordinateur, ce qui m'a d'ailleurs aidé à orienter ma carrière vers le développement web.</Card.Body>

                <ListGroup.Item style={{ fontWeight: "bold"}}>Basketball</ListGroup.Item>
                    <Card.Body> Le basketball est un sport que je pratique régulièrement avec des amis depuis le lycée. Même si je n'ai jamais joué en club, j'apprécie toujours les moments passés sur le terrain.</Card.Body>

                <ListGroup.Item style={{ fontWeight: "bold"}}>Jeux vidéos</ListGroup.Item>
                    <Card.Body> Les jeux vidéo occupent une grande partie de mon temps libre. Que ce soit sur PC ou console, ils sont pour moi un moyen de décompresser et de m'épanouir.</Card.Body>

                <ListGroup.Item style={{ fontWeight: "bold"}}>Esport</ListGroup.Item>
                    <Card.Body> Je suis également passionné par l'esport. Suivre les compétitions est un passe-temps que j'apprécie énormément et qui me permet de rester connecté à cet univers.</Card.Body>
                    
            </ListGroup>
        </Card.Body>
    </Card>
    </>
  );
}

export default Profile;
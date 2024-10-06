import { CardBody, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Pp from "../images/pp.png"
import OR from "../images/Oreegami.png"
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

    <Card style={{ padding: '1rem', margin: "1rem" }} data-aos="fade-left" data-aos-duration="1000">
        <Container>
            <Row>
                {/* Pour les écrans plus petits, la colonne de l'image sera en premier */}
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
                    <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <a href='https://www.linkedin.com/in/allanvaccarizi/' target='_blank' rel="noopener noreferrer">
                            <Image src={Pp} rounded className="img-fluid" alt="Photo de Allan Vaccarizi" />
                        </a>
                    </CardBody>
                </Col>
                <Col xs={12} md={6}>
                    <Card.Title>Qui suis-je ?</Card.Title>
                    <Card.Body>
                        Je m'appelle Allan Vaccarizi, j'ai 25 ans et je suis en reconversion professionnelle.
                        <br />
                        <br />
                        Issu du milieu de la restauration, j'ai décidé de me tourner vers le marketing digital, un domaine qui m'attire par ses nombreuses possibilités. Actuellement, je suis une formation en marketing digital chez Oreegami, où j'acquiers les compétences nécessaires pour décrocher une alternance dès janvier 2025.
                        <br />
                        <br />
                        Mon objectif est de m'épanouir dans ce domaine et de contribuer activement à la réussite des entreprises grâce à des stratégies digitales innovantes.
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    </Card>

    <Card style={{ padding: '1rem', margin: "1rem" }} data-aos="fade-right" data-aos-duration="1000">
        <Container>
            <Row>
                {/* Colonne de l'image, qui sera au-dessus du texte sur les petits écrans */}
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
                    <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <a href='https://www.linkedin.com/in/allanvaccarizi/' target='_blank' rel="noopener noreferrer">
                            <Image src={OR} rounded className="img-fluid" alt="Photo du logo Oreegami" />
                        </a>
                    </CardBody>
                </Col>

                {/* Colonne de texte */}
                <Col xs={12} md={6}>
                    <Card.Title>Mon projet</Card.Title>
                    <Card.Body>
                        Actuellement inscrit chez Oreegami, je suis immergé dans un programme intensif de 3 mois, axé sur la maîtrise des outils et leviers du marketing digital, notamment le SEO, SEA, les réseaux sociaux, et le email marketing, me fournissant ainsi les bases nécessaires pour exceller dans ce domaine en constante évolution.
                        <br /> 
                        <br /> 
                        En parallèle, je participe à des projets concrets et à des challenges (hackathons) qui me permettent de mettre en pratique les connaissances acquises. Ces projets sont conçus pour simuler des situations réelles, et impliquent un travail d'équipe collaboratif, favorisant l'application directe des compétences dans des environnements dynamiques et compétitifs.
                        <br /> 
                        <br /> 
                        L'opportunité d'une alternance en 2025 représente pour moi un tremplin pour continuer à développer mes compétences en marketing digital. Voici les principaux domaines que j'explore au sein de cette formation : 
                        <br /> 
                        • Maîtrise des leviers du marketing digital : SEO, SEA, réseaux sociaux, email marketing
                        <br /> 
                        • Gestion de projets marketing en situation réelle : participation à des challenges et hackathons
                        <br /> 
                        • Mise en pratique dans des environnements collaboratifs et dynamiques
                    </Card.Body>
                </Col>
            </Row>
        </Container>
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
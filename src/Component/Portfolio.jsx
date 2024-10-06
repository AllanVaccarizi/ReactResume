import { CardBody, CardTitle } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Game from "./TicTacToe" //import Tic Tac Toe
import FL from "../images/flstudio.png"
import MA from "../images/MarronierTopinamour.png"
import NL from "../images/Topinamour.png"
import AZ from "../images/AZ.png"
import AOS from "aos" //dependecy to animate the cards
import 'aos/dist/aos.css' //dependecy to animate the cards

function Portfolio(){
    
    AOS.init() //initialize the aos dependency

    return (
        <>


        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

            <Card.Title>Growth Marketing</Card.Title>

                <Card.Body>
                Dans le cadre de ma formation avec <a href="https://oreegami.com/" target="_blank" style={{textDecoration:'None'}}>Oreegami</a>, j'ai eu le plaisir de découvrir le growth marketing automation grâce à <a href="https://www.linkedin.com/in/product-growth-scale/" target="_blank" style={{textDecoration:'None'}}>Jérémy François</a>. J'ai été introduit à des outils puissants comme Zapier et Airtable, ce qui m'a permis de créer une automatisation efficace : chaque nouvelle entrée dans ma base de données Airtable déclenche l'envoi d'un mail automatique, optimisant ainsi la gestion des contacts et le suivi des interactions. Cette introduction à l'automatisation de tâches a attisé ma curiosité, et j'ai hâte d'en découvrir davantage.
                <br/>
                <br/>
                <span style={{fontSize: '2rem'}}><a href="https://sviky.mjt.lu/nl3/W5wzcqzeukVgJidvD3WtEg?m=AVYAAFCMkyEAAc4TGaAAA7Wvc54AAYKId88An5mFACv0sABm-nEdgCWfslV3RoSyLC8Tid1ijgAolVE&b=4387beb7&e=c1b25500&x=5o62Qblb5-QvilNNOZPnp3FOQgOPlJ7r4GC62A11qiU" target="_blank" style={{textDecoration:'None'}}>La newsletter</a></span>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href='https://topinamour.com/' target='_blank' rel="noopener noreferrer">
                        <Image src={AZ} className="img-fluid" alt="Image de mon travail sur Airtable et Zapier" />
                    </a>
                </CardBody>

        </Card>
        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

            <Card.Title>Newsletter</Card.Title>

                <Card.Body>
                Dans le cadre de ma formation avec <a href="https://oreegami.com/" target="_blank" style={{textDecoration:'None'}}>Oreegami</a> sous la supervision de <a href="https://www.linkedin.com/in/wmoussaoui/" target='blank'style={{textDecoration:'None'}}>Wassila Moussaoui</a>, j’ai eu l’opportunité de travailler sur la création d’une <a href="https://sviky.mjt.lu/nl3/W5wzcqzeukVgJidvD3WtEg?m=AVYAAFCMkyEAAc4TGaAAA7Wvc54AAYKId88An5mFACv0sABm-nEdgCWfslV3RoSyLC8Tid1ijgAolVE&b=4387beb7&e=c1b25500&x=5o62Qblb5-QvilNNOZPnp3FOQgOPlJ7r4GC62A11qiU" target="_blank" style={{textDecoration:'None'}}>newsletter</a> fictive pour une marque. Ce projet m’a permis de mettre en pratique mes compétences en marketing digital, en collaboration avec une équipe dynamique, pour concevoir un contenu engageant et adapté aux besoins de la marque.
                <br/>
                <br/>
                <span style={{fontSize: '2rem'}}><a href="https://sviky.mjt.lu/nl3/W5wzcqzeukVgJidvD3WtEg?m=AVYAAFCMkyEAAc4TGaAAA7Wvc54AAYKId88An5mFACv0sABm-nEdgCWfslV3RoSyLC8Tid1ijgAolVE&b=4387beb7&e=c1b25500&x=5o62Qblb5-QvilNNOZPnp3FOQgOPlJ7r4GC62A11qiU" target="_blank" style={{textDecoration:'None'}}>La newsletter</a></span>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href='https://topinamour.com/' target='_blank' rel="noopener noreferrer">
                        <Image src={NL} className="img-fluid" alt="Logo topinamour" />
                    </a>
                </CardBody>

        </Card>

        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-left" data-aos-duration="1000">

            <Card.Title>Marronnier</Card.Title>

                <Card.Body>
                Dans le cadre de ma formation avec Oreegami sous la supervision de <a href="https://www.linkedin.com/in/wmoussaoui/" target='blank' style={{textDecoration:'None'}}>Wassila Moussaoui</a>, j'ai également travaillé sur la réalisation d’un <a href="https://docs.google.com/spreadsheets/d/1quQl_8jDYpA4p458pURlDLgJ5nGOaS7FqrcMUya7Dso/edit?usp=sharing" target='blank' style={{textDecoration:'None'}}>marronnier</a> marketing fictif pour une marque. Ce projet m’a permis de planifier et structurer des actions marketing tout au long de l’année, en alignant les campagnes avec les moments clés pour maximiser l’impact et la cohérence de la communication.
                <br/>
                <br/>
                <span style={{fontSize: '2rem'}}><a href="https://docs.google.com/spreadsheets/d/1quQl_8jDYpA4p458pURlDLgJ5nGOaS7FqrcMUya7Dso/edit?usp=sharing" target="_blank" style={{textDecoration:'None'}}>Le marronier</a></span>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href='https://topinamour.com/' target='_blank' rel="noopener noreferrer">
                        <Image src={MA} className="img-fluid" alt="Image du marronnier" />
                    </a>
                </CardBody>

        </Card>

        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

            <Card.Title>Fl Studio</Card.Title>

                <Card.Body>
                <a href="https://fl-studio-2bjwcrdei-allan-vaccarizis-projects.vercel.app/" target='blank' style={{textDecoration:'None'}}>FL Studio</a> représente mon tout premier projet, un site conçu pour un studio de jeux vidéo. En collaboration avec le client, nous avons établi un <a href="https://docs.google.com/document/d/1WUgMZzwuuEUEuScYgNO1NS0GOMCoasARkjpBIgkjKAk/edit?usp=sharing">cahier des charges</a> détaillé et planifié des réunions régulières, tous les quinze jours, pour suivre l'avancement du site. 
                <br />
                <br />
                À ce jour, la partie technique du projet est pratiquement achevée. Cependant, puisque le jeu lui-même n'est pas encore terminé, le contenu audiovisuel et textuel actuellement présent sur le site n'est ni de ma propriété ni celle du client. Il s'agit simplement de contenu temporaire en attendant que des éléments authentiques soient fournis pour rendre le site opérationnel.
                <br />
                <br />
                À ce jour, le site a été entièrement conçu en HTML, CSS et JavaScript, sans l'utilisation d'aucun framework. En effet, j'ai délibérément choisi de créer mon premier site à partir de zéro afin de mieux appréhender la logique du développement web.
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href='https://topinamour.com/' target='_blank' rel="noopener noreferrer">
                        <Image src={FL} className="img-fluid" alt="Image du site FL Studio" />
                    </a>
                </CardBody>

        </Card>

        <Card style={{ padding: '1rem', margin: "1rem" }} data-aos="fade-left" data-aos-duration="1000">
            <Card.Title>Tic Tac Toe</Card.Title>
    
                <Card.Body>
                    Pendant mon apprentissage du langage React, j'ai plongé dans la documentation du site, ce qui m'a permis de développer un jeu de Tic Tac Toe.
                    <br/>
                    <br/>
                    <span style={{color:'grey'}}>L'affichage sur téléphone peut être disfonctionnel en fonction de la taille de votre appareil</span>
                </Card.Body>

            <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Utiliser une classe pour s'assurer que le jeu est responsive */}
                <div style={{ width: '100%', maxWidth: '300px' }}>
                    <Game /> {/* Tic Tac Toe game */}
                </div>
            </Card.Body>

        </Card>
        </>
    )
}

export default Portfolio
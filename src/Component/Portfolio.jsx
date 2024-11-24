import { CardBody, CardTitle } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Game from "./TicTacToe" //import Tic Tac Toe
import FL from "../images/flstudio.png"
import MA from "../images/MarronierTopinamour.png"
import NL from "../images/Topinamour.png"
import AZ from "../images/AZ.png"
import PR from "../images/TableauPrompt.png"
import GA from "../images/GADS.png"
import FA from "../images/MADS.png"
import G4 from "../images/GA4.png"
import AOS from "aos" //dependecy to animate the cards
import 'aos/dist/aos.css' //dependecy to animate the cards

function Portfolio(){
    
    AOS.init() //initialize the aos dependency

    return (
        <>
        <div style={{ overflow: 'hidden' }}>
        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

            <Card.Title>Google ADS</Card.Title>

                <Card.Body>
                Au cours de ma formation chez Oreegami, j'ai découvert et approfondi l'utilisation de Google Analytics 4 (GA4), une plateforme essentielle pour tout professionnel du marketing digital. GA4 se distingue par sa capacité à fournir une analyse approfondie des visiteurs d’un site internet, permettant de mieux comprendre leur comportement et d’optimiser les campagnes publicitaires.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>L’analyse des données : une richesse d’informations</div>
                Google Analytics 4 est une véritable mine d’or d’informations. J'ai appris à naviguer dans l’interface pour identifier les principaux KPIs tels que le taux de conversion, les sources de trafic ou encore le temps passé sur une page. Ces données permettent d’analyser en profondeur l’audience et d’ajuster les stratégies marketing en conséquence, favorisant une meilleure allocation des budgets publicitaires.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>Exploiter GA4 pour des stratégies de publicité en ligne</div>
                L’utilisation de GA4 va bien au-delà des simples statistiques. En marketing digital, la précision des campagnes dépend de la qualité des insights tirés des données. Avec GA4, j’ai pu définir des audiences ciblées, identifier les pages performantes et repérer les opportunités d’amélioration, rendant mes campagnes publicitaires plus efficaces et adaptées.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>Poser une balise Google Tag Manager : le début de la personnalisation</div>
                Dans le cadre de cette formation, j’ai également appris à utiliser Google Tag Manager pour poser des balises de suivi. Cela m’a permis de mesurer des événements spécifiques, comme des clics ou des conversions, et d’enrichir les données collectées sur GA4. Cette personnalisation garantit une compréhension encore plus fine des interactions des visiteurs sur un site.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>Pourquoi Google Analytics 4 est essentiel</div>
                GA4 est aujourd’hui indispensable pour toute stratégie marketing efficace. Qu’il s’agisse d’optimiser un site e-commerce, de suivre les performances d’un blog ou de maximiser l’impact des campagnes publicitaires, cet outil permet d’obtenir des résultats mesurables et concrets.
                <br/>
                <br/>
                En maîtrisant GA4, je suis en mesure d’aider les marques à mieux comprendre leur audience, à optimiser leur stratégie digitale et à maximiser leur ROI grâce à une exploitation intelligente des données.
                <br/>
                <br/>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Image src={G4} className="img-fluid" alt="Screenshot interface google ads" />
                </CardBody>

        </Card>
        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-left" data-aos-duration="1000">

            <Card.Title>Meta Ads</Card.Title>

                <Card.Body>
                Dans le cadre de ma formation en marketing digital chez Oreegami, j'ai développé une expertise dans l'utilisation de Meta Ads, une plateforme incontournable pour créer des campagnes publicitaires impactantes sur Facebook et Instagram. Cet outil offre des possibilités infinies pour atteindre des audiences spécifiques et maximiser les résultats publicitaires, qu'il s'agisse de générer des conversions ou d'accroître la notoriété d'une marque.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>Création de campagnes ciblées : l'importance des KPI</div>
                Grâce à Meta Ads, j’ai appris à structurer des campagnes selon des objectifs précis, tels que le trafic, les ventes ou l’engagement. En segmentant les audiences, par centres d’intérêt, comportements ou données démographiques, j'ai pu garantir que chaque publicité atteigne le bon public. L'intégration des KPI, tels que le taux de clics, le coût par conversion ou le ROAS, permet de mesurer et d'optimiser la performance en temps réel, assurant un retour sur investissement significatif.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>Personnalisation et créativité au service de l'engagement</div>
                L'un des points forts de Meta Ads réside dans sa capacité à adapter les formats publicitaires aux préférences des utilisateurs. Que ce soit via des vidéos percutantes, des carrousels interactifs ou des images statiques attractives, j'ai appris à créer des annonces qui captivent l'attention tout en respectant les meilleures pratiques de design publicitaire.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>Une stratégie orientée résultats</div>
                En utilisant les outils d'analyse de Meta Ads, comme le Pixel Meta ou les tests A/B, j’ai compris comment identifier les points à améliorer dans une campagne pour maximiser son efficacité. Cette méthodologie permet de s’adapter rapidement aux performances et de répondre aux besoins des différentes audiences tout au long de l'entonnoir de conversion.
                <br/>
                <br/>
                <div style={{ fontWeight: 'bold' }}>Walk in Paris</div>
                J’ai eu l’opportunité de travailler sur un projet concret pour la marque Walk in Paris. Mon objectif était de concevoir des campagnes publicitaires mettant en valeur leur nouvelle collection, en mêlant stratégie de notoriété et conversion. J’ai travaillé sur la définition d’audiences clés, l’élaboration de visuels impactants, et l’analyse des performances à travers des KPIs pertinents. Ce projet m’a permis de mieux comprendre comment adapter les publicités à une cible spécifique tout en respectant l’identité de la marque.
                <br/>
                <br/>
                Grâce à mon apprentissage de Meta Ads, je suis désormais capable de créer, gérer et optimiser des campagnes publicitaires adaptées aux objectifs des entreprises.
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Image src={FA} className="img-fluid" alt="Screenshot interface google ads" />
                </CardBody>

        </Card>


        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

            <Card.Title>Google ADS</Card.Title>

                <Card.Body>
                Au cours de ma formation en marketing digital, j'ai approfondi l'utilisation de Google Ads, en explorant l'interface et ses fonctionnalités avancées. J'ai appris à créer des campagnes publicitaires en Search, en optimisant chaque étape : de la recherche de mots-clés stratégiques à la rédaction d'annonces percutantes. Cette expérience m’a permis de comprendre l’importance d’un ciblage précis pour maximiser le ROI et atteindre des audiences qualifiées. La mise en place d’une campagne m’a également familiarisé avec les outils d’analyse, indispensables pour affiner les performances et adapter les stratégies en temps réel, assurant ainsi une visibilité accrue et des résultats concrets pour les marques.

                Vous trouverez un résumé de mon travail <a href="https://docs.google.com/document/d/1NU8UtM8Xk8NzbWzJ5-LaEqHkpHcBnCeGYQigYQ5eV2w/edit?tab=t.0" target="_blank" style={{textDecoration:'None'}}>ici</a>
                <br/>
                <br/>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href="https://docs.google.com/document/d/1NU8UtM8Xk8NzbWzJ5-LaEqHkpHcBnCeGYQigYQ5eV2w/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                        <Image src={GA} className="img-fluid" alt="Screenshot interface google ads" />
                    </a>
                </CardBody>

        </Card>
        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-left" data-aos-duration="1000">

            <Card.Title>Prompt engineering</Card.Title>

                <Card.Body>
                Dans le cadre de mes projets en marketing digital, j’ai découvert et approfondi la discipline du prompt engineering, une compétence clé pour interagir efficacement avec les modèles d'intelligence artificielle, Perplexity, Chatgpt, Claude, Gemini. Cette expertise me permet de concevoir des prompts précis et optimisés, améliorant la pertinence des réponses générées. Cela m’a également permis de développer des solutions plus personnalisées, en utilisant l’IA pour répondre aux besoins spécifiques des utilisateurs et créer des expériences plus engageantes.

                Cette approche stratégique renforce ma capacité à intégrer des technologies de pointe dans mes projets, optimisant les résultats et les interactions.
                <br/>
                <br/>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href='https://topinamour.com/' target='_blank' rel="noopener noreferrer">
                        <Image src={PR} className="img-fluid" alt="Tableau expliquant ma rédaction de prompt" />
                    </a>
                </CardBody>

        </Card>

        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

            <Card.Title>Growth Marketing</Card.Title>

                <Card.Body>
                Dans le cadre de ma formation avec <a href="https://oreegami.com/" target="_blank" style={{textDecoration:'None'}}>Oreegami</a>, j'ai eu le plaisir de découvrir le growth marketing automation grâce à <a href="https://www.linkedin.com/in/product-growth-scale/" target="_blank" style={{textDecoration:'None'}}>Jérémy François</a>. J'ai été introduit à des outils puissants comme Zapier et Airtable, ce qui m'a permis de créer une automatisation efficace : chaque nouvelle entrée dans ma base de données Airtable déclenche l'envoi d'un mail automatique, optimisant ainsi la gestion des contacts et le suivi des interactions. Cette introduction à l'automatisation de tâches a attisé ma curiosité, et j'ai hâte d'en découvrir davantage.
                <br/>
                <br/>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Image src={AZ} className="img-fluid" alt="Image de mon travail sur Airtable et Zapier" />
                </CardBody>

        </Card>
        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-left" data-aos-duration="1000">

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

        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-right" data-aos-duration="1000">

            <Card.Title>Calendrier éditorial</Card.Title>

                <Card.Body>
                Dans le cadre de ma formation avec Oreegami sous la supervision de <a href="https://www.linkedin.com/in/wmoussaoui/" target='blank' style={{textDecoration:'None'}}>Wassila Moussaoui</a>, j'ai travaillé sur la réalisation d’un <a href="https://docs.google.com/spreadsheets/d/1quQl_8jDYpA4p458pURlDLgJ5nGOaS7FqrcMUya7Dso/edit?usp=sharing" target='blank' style={{textDecoration:'None'}}>calendrier éditorial</a> fictif pour une marque. Ce projet m’a permis de planifier et structurer des actions marketing tout au d'un mois, en alignant les campagnes avec les moments clés pour maximiser l’impact et la cohérence de la communication.
                <br/>
                <br/>
                <span style={{fontSize: '2rem'}}><a href="https://docs.google.com/spreadsheets/d/1quQl_8jDYpA4p458pURlDLgJ5nGOaS7FqrcMUya7Dso/edit?usp=sharing" target="_blank" style={{textDecoration:'None'}}>Calendrier éditorial</a></span>
                </Card.Body>

                <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href='https://topinamour.com/' target='_blank' rel="noopener noreferrer">
                        <Image src={MA} className="img-fluid" alt="Image du marronnier" />
                    </a>
                </CardBody>

        </Card>

        <Card style={{ padding: '1rem', margin: "1rem"}} data-aos="fade-left" data-aos-duration="1000">

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
                    <a href='https://fl-studio-2bjwcrdei-allan-vaccarizis-projects.vercel.app/' target='_blank' rel="noopener noreferrer">
                        <Image src={FL} className="img-fluid" alt="Image du site FL Studio" />
                    </a>
                </CardBody>

        </Card>

        <Card style={{ padding: '1rem', margin: "1rem" }} data-aos="fade-right" data-aos-duration="1000">
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
        </div>
        </>
    )
}

export default Portfolio
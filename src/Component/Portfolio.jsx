import Card from 'react-bootstrap/Card';
import Game from "./TicTacToe"

function Portfolio(){
    return (
        <>
        <Card style={{ padding: '1rem', margin: "1rem"}}>
            <Card.Title>Fl Studio</Card.Title>
            <Card.Body>
            <a href="https://fl-studio-2bjwcrdei-allan-vaccarizis-projects.vercel.app/">FL Studio</a> représente mon tout premier projet, un site conçu pour un studio de jeux vidéo. En collaboration avec le client, nous avons établi un <a href="https://docs.google.com/document/d/1WUgMZzwuuEUEuScYgNO1NS0GOMCoasARkjpBIgkjKAk/edit?usp=sharing">cahier des charges</a> détaillé et planifié des réunions régulières, tous les quinze jours, pour suivre l'avancement du site. À ce jour, la partie technique du projet est pratiquement achevée. Cependant, puisque le jeu lui-même n'est pas encore terminé, le contenu audiovisuel et textuel actuellement présent sur le site n'est ni de ma propriété ni celle du client. Il s'agit simplement de contenu temporaire en attendant que des éléments authentiques soient fournis pour rendre le site opérationnel.
             </Card.Body>
             <iframe
             src='#'
             />
        </Card>
        <Card style={{ padding: '1rem', margin: "1rem"}}>
            <Card.Title>Tic Tac Toe</Card.Title>
            <Card.Body>
                Pendant mon apprentissage du langage React, j'ai plongé dans la documentation du site, ce qui m'a permis de développer un jeu de Tic Tac Toe.
             </Card.Body>
             <Card.Body>
                <Game />
             </Card.Body>
        </Card>
        </>
    )
}

export default Portfolio
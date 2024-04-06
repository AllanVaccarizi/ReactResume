import NavigationBar from "../Component/Navbar";


export default function Error(){
    return(
        <>
            <NavigationBar />
            <Card>
                <Card.Title>Erreur 404</Card.Title>
                    <Card.Body>
                        La page que vous demandez n'existe pas
                    </Card.Body>
            </Card>
        </>
    )
}
import React from "react"
import { Container, Row } from "react-bootstrap"
import { CardBody, CardTitle } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Col from 'react-bootstrap/Col';

function SkillsBar () {
    const HTML = 95
    const CSS = 80
    const JS = 60
    const REACT = 30
    const BOOTSTRAP = 30
    const PHP = 0

    //Value that will be used for the Skillbars
    
    return (
        <>
            <Container fluid="lg">
                <Row>
                <CardTitle>Mes compétences</CardTitle>

                    <Col >

                        <CardBody >

                            <h5>HTML</h5>
                            <ProgressBar animated now={HTML} label={`${HTML}%`} />

                            <br />

                            <h5>CSS</h5>
                            <ProgressBar animated now={CSS} label={`${CSS}%`} />

                            <br />

                            <h5>JS</h5>
                            <ProgressBar animated now={JS} label={`${JS}%`} />

                            <br />

                        </CardBody>

                    </Col>

                    <Col >

                        <CardBody >

                            <h5>REACT</h5>
                            <ProgressBar animated now={REACT} label={`${REACT}%`} />

                            <br />

                            <h5>BOOTSTRAP</h5>
                            <ProgressBar animated now={BOOTSTRAP} label={`${BOOTSTRAP}%`} />

                            <br />

                            <h5>PHP</h5>
                            <ProgressBar animated now={PHP} label={`${PHP}%`} />

                            <br />

                        </CardBody>
                        
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default SkillsBar


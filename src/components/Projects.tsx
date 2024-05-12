import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


// ["Wireless Sensors And Devices Lab/Cloudhawk", "Full-Stack Developer"]
// "BlackBerry",
// "Geotab"
export default function Projects() {
    let interns: Map<String, String>[] = [
    ];
    return(
        <Container fluid>
            <h1 >Projects</h1>
            <Row xs={1} md={2} className='g-4'>
                {Array.from( {length: 3}).map((_, idx) => (
                    <Col>
                        <Card style={{ width:'18rem' }}>
                            <Card.Header>Technical Support Assistant</Card.Header>
                            <Card.Img variant='top'></Card.Img>
                            <Card.Body>
                                <Card.Title>{interns[idx]}</Card.Title>
                                <Card.Text>
                                    Experiences at {interns[idx]}
                                    <br/> 
                                    xxx
                                    xxxx
                                    xxx
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
                )
                }
            </Row>
        </Container>
    );
}
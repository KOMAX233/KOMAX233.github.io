import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Contact() {
    return(
        <footer className="bg-black text-white p-3 mt-4">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs={12}>
                        <h5>Contact Me</h5>
                        <div className="social-links">
                            <a href="https://github.com" className="me-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://linkedin.com" className="me-2"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <p>Made with <span className="text-danger">&hearts;</span></p>
                        <p>2024 - Yue Fang</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
import Accordion from 'react-bootstrap/Accordion';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Education() {
    return(
        <Container fluid>
            <h1 >Education</h1>
            <p>University of Waterloo</p>
            Collapse all
            open all
            <Accordion alwaysOpen>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Computer Science</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS145 Designing Functional Programs (Advanced Level)</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS136 Elementary Algorithm Design and Data Abstraction</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS240 Data Structures and Data Management</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS241 Foundations of Sequential Programs</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS245 Logic and Computation</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS246 Object-Oriented Software Development</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS251 Computer Organization and Design</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS341 Algorithms</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS350 Operating Systems</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS348 Introduction to Database Management</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS349 User Interfaces</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS370 Numerical Computation</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS449 Human-Computer Interaction</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox></InputGroup.Checkbox>
                            <InputGroup.Text>CS488 Introduction to Computer Graphics</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CS492 The Social Implications of Computing</InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Mathematics</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MATH135 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MATH136 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MATH137 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MATH138 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MATH237 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MATH239 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Stat</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>STAT230 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>STAT231 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>English</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>EMLS101R </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>ENGL108D </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>ENGL295 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Japanese</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>Japan101R </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>Japan102R </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>Japan201R </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>Music</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MUSIC111 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MUSIC116 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>MUSIC140 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>Science</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>SCI206 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>SCI207 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                    <Accordion.Header>Accounting and Financial Management</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>AFM101 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                    <Accordion.Header>Geography</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>GEOG101 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='9'>
                    <Accordion.Header>Classical Studies</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup>
                            <InputGroup.Checkbox checked></InputGroup.Checkbox>
                            <InputGroup.Text>CLAS104 </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}
import { Container,Row, Col } from 'react-grid-system';

export default function Experience({
    company,
    location,
    position,
    startDate,
    endDate,
    description}) {
        return(
        <>
            <Container className=''>
                <Row><h4>{position}</h4></Row>
                <Row>
                    <Col><h5>{company}</h5><span>{location}</span></Col>
                    <Col><h5><span>{startDate} - {endDate}</span></h5></Col>
                </Row>
                <Row>
                    <p>{description}</p>
                </Row>
            </Container>
            <br></br>
        </>
        )
    }
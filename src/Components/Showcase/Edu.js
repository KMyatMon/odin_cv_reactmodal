import { Container, Row, Col } from "react-grid-system";

export default function Edu({
    name,
    school,
    startDate,
    endDate,
}) {
        return(
        <>
            <Container className="">
                <Row><h4>{name}</h4></Row>
                <Row>
                    <Col>
                        <h5>{school}</h5>
                    </Col>
                    <Col>
                        <span>{startDate} - {endDate}</span>
                    </Col>
                </Row>
            </Container>
            <br></br>
        </>
        )
    }